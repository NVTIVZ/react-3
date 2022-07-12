import { FutureRequest } from "../apiHelpers";
import gql from "graphql-tag";

const typesCall = () =>
  FutureRequest(
    gql`
      query types {
        pokemon_v2_type {
          name
          id
        }
      }
    `
  );

export default typesCall;
