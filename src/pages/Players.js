import React, { useCallback, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getPlayers } from "../fakeBackend/api";
import CardsGrid from "../components/CardsGrid";
import { andThen, cond, equals, isEmpty, map, prop, sortBy } from "ramda";
import LoadingSpinner from "../components/LoadingSpinner";
import { fork } from "fluture";
import styled from "styled-components";
import ErrorMessage from "../components/ErrorMessage";

const Players = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("LOADING");

  const handleGetPlayers = useCallback(() => {
    setStatus("LOADING");
    getPlayers(2000)
      |> map((x) => x |> sortBy(prop("name")) |> sortBy(prop("surname")))
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

export default Players;

const Title = styled.p`
  margin: 15px auto;
  font-size: 30px;
`;
