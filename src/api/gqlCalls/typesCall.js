import { FutureRequest } from "../apiHelpers";
import gql from "graphql-tag";

const typesCall = (limit, offset) =>
  FutureRequest(
    gql`
      query types($limit: Int!, $offset: Int!) {
        pokemon_v2_type(limit: $limit, offset: $offset) {
          name
          id
        }
      }
    `,
    { limit, offset }
  );

export default typesCall;
