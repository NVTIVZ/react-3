import React, { useCallback, useEffect, useState } from "react";
import Layout from "../components/Layout";
import CardsGrid from "../components/CardsGrid";
import { cond, equals, map, prop } from "ramda";
import LoadingSpinner from "../components/LoadingSpinner";
import { fork } from "fluture";
import styled from "styled-components";
import ErrorMessage from "../components/ErrorMessage";
import testCall from "../api/qqlCalls/testCall";

const Pokemons = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("LOADING");

  const handleGetPlayers = useCallback(() => {
    setStatus("LOADING");
    testCall({ limit: 40 })
      |> map((res) => prop("data")(res))
      |> map((data) => prop("pokemon_v2_pokemon")(data))
      |> fork(() => setStatus("ERROR"))((res) => {
        setData(res);
        setStatus("SUCCESS");
      });
  }, []);

  useEffect(() => {
    handleGetPlayers();
  }, []);

  return (
    <Layout>
      <Title>Players</Title>
      {cond([
        [equals("ERROR"), () => <ErrorMessage refresh={handleGetPlayers} />],
        [equals("LOADING"), () => <LoadingSpinner />],
        [
          equals("SUCCESS"),
          () => <CardsGrid data={data} paginationAmount={20} />,
        ],
      ])(status)}
    </Layout>
  );
};

export default Pokemons;

const Title = styled.p`
  margin: 15px auto;
  font-size: 30px;
`;
