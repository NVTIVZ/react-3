import { FutureRequest } from "../apiHelpers";
import gql from "graphql-tag";

const pokemonsCall = (limit, offset) =>
  FutureRequest(
    gql`
      query pokemons($limit: Int!, $offset: Int!) {
        pokemon_v2_pokemon(limit: $limit, offset: $offset) {
          id
          name
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              name
            }
          }
        }
      }
    `,
    { limit, offset }
  );

export default pokemonsCall;
