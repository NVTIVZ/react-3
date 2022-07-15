import React, { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { map, path } from "ramda";
import pokemonCall from "../api/gqlCalls/pokemonCall";
import DetailsModal from "../components/DetailsModal";

const PokemonDetail = () => {
  const { modalId } = useParams();
  const handleGetPokemon = useCallback(() => {
    return (
      pokemonCall(modalId) |> map(path(["data", "pokemon_v2_pokemon_by_pk"]))
    );
  }, []);

  return <DetailsModal variant={"pokemon"} handleCall={handleGetPokemon} />;
};

export default PokemonDetail;
