import { FutureRequest } from "../apiHelpers";
import gql from "graphql-tag";

const typesCount = () =>
  FutureRequest(
    gql`
      query typesCount {
        pokemon_v2_type_aggregate {
          aggregate {
            count
          }
        }
      }
    `
  );

export default typesCount;
