import { FutureRequest } from "../apiHelpers";
import gql from "graphql-tag";

const pokemonsCall = () =>
  FutureRequest(
    gql`
      query pokemons {
        pokemon_v2_pokemon(limit: $limit) {
          id
          name
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              name
            }
          }
        }
      }
    `
  );

export default pokemonsCall;
