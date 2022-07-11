import { FutureRequest } from "../apiHelpers";
import gql from "graphql-tag";

const testCall = ({ limit }) =>
  FutureRequest(
    gql`
      query pokemons($limit: Int!) {
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
    `,
    { limit }
  );

export default testCall;
