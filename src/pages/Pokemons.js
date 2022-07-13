import React, { useCallback } from "react";
import Layout from "../components/Layout";
import CardsGrid from "../components/CardsGrid";
import { head, map, path } from "ramda";
import styled from "styled-components";
import pokemonsCall from "../api/qqlCalls/pokemonsCall";
import pokemonsCount from "../api/qqlCalls/pokemonsCount";

const Pokemons = () => {
  const handleGetPlayers = useCallback(
    () =>
      pokemonsCall()
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
      ),
    []
  );

  const handleGetCount = useCallback(
    () =>
      pokemonsCount()
      |> map(
        path(["data", "pokemon_v2_pokemon_aggregate", "aggregate", "count"])
      ),
    []
  );

  return (
    <Layout>
      <Title>Pokemons</Title>
      <CardsGrid
        variant={"pokemon"}
        handleCall={handleGetPlayers}
        handleCount={handleGetCount}
        paginationAmount={20}
      />
    </Layout>
  );
};

export default Pokemons;

const Title = styled.p`
  margin: 15px auto;
  font-size: 30px;
`;
