import React, { useCallback, useEffect, useState } from "react";
import Layout from "../components/Layout";
import CardsGrid from "../components/CardsGrid";
import { cond, equals, head, indexOf, map, path, prop } from "ramda";
import LoadingSpinner from "../components/LoadingSpinner";
import { fork } from "fluture";
import styled from "styled-components";
import ErrorMessage from "../components/ErrorMessage";
import pokemonsCall from "../api/qqlCalls/pokemonsCall";

const Pokemons = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("LOADING");

  const handleGetPlayers = useCallback(() => {
    setStatus("LOADING");
    pokemonsCall({ limit: 151 })
      |> map(path(["data", "pokemon_v2_pokemon"]))
      |> map(
        (list) =>
          list
          |> map(({ id, name, pokemon_v2_pokemontypes }) => {
            return {
              id,
              name,
              type:
                pokemon_v2_pokemontypes
                |> head
                |> path(["pokemon_v2_type", "name"]),
            };
          })
      )
      |> fork(() => setStatus("ERROR"))((res) => {
        setData(res);
        setStatus("SUCCESS");
      });
  }, []);

  console.log(data);

  useEffect(() => {
    handleGetPlayers();
  }, []);

  return (
    <Layout>
      <Title>Pokemons</Title>
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
