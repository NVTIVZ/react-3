import { FutureRequest } from "../apiHelpers";
import gql from "graphql-tag";

const pokemonsCount = () =>
  FutureRequest(
    gql`
      query pokemonsCount {
        pokemon_v2_pokemon_aggregate {
          aggregate {
            count
          }
        }
      }
    `
  );

export default pokemonsCount;
