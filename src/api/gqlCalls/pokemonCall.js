import React from "react";
import { FutureRequest } from "../apiHelpers";
import gql from "graphql-tag";

const PokemonCall = (id) =>
  FutureRequest(
    gql`
      query pokemon($id: Int!) {
        pokemon_v2_pokemon_by_pk(id: $id) {
          name
          id
          height
          base_experience
          weight
          pokemon_v2_pokemonstats {
            pokemon_v2_stat {
              name
            }
            base_stat
          }
        }
      }
    `,
    { id }
  );

export default PokemonCall;
