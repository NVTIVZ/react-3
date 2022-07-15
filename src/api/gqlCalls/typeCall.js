import { FutureRequest } from "../apiHelpers";
import gql from "graphql-tag";

const typeCall = (id) =>
  FutureRequest(
    gql`
      query type($id: Int!) {
        pokemon_v2_type_by_pk(id: $id) {
          name
          pokemon_v2_pokemontypes {
            pokemon_v2_pokemon {
              name
            }
          }
        }
      }
    `,
    { id }
  );

export default typeCall;
