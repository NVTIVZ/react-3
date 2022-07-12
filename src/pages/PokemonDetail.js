import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pokemonsCall from "../api/qqlCalls/pokemonsCall";
import { head, map, path } from "ramda";
import { fork } from "fluture";
import pokemonCall from "../api/qqlCalls/pokemonCall";
import DetailsModal from "../components/DetailsModal";

const PokemonDetail = () => {
  const { modalId } = useParams();
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("LOADING");

  console.log(modalId);

  const handleGetPokemon = useCallback(() => {
    setStatus("LOADING");
    pokemonCall(modalId)
      |> map(path(["data", "pokemon_v2_pokemon_by_pk"]))
      |> fork(() => setStatus("ERROR"))((res) => {
        setData(res);
        setStatus("SUCCESS");
      });
  }, []);
  console.log(data);

  useEffect(() => {
    handleGetPokemon();
  }, []);

  return <DetailsModal data={data} variant={"pokemon"} status={status} />;
};

export default PokemonDetail;
