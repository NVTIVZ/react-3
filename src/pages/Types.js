import React, { useCallback } from "react";
import Layout from "../components/Layout";
import { map, path } from "ramda";
import CardsGrid from "../components/CardsGrid";
import styled from "styled-components";

import typesCall from "../api/gqlCalls/typesCall";
import typesCount from "../api/gqlCalls/typesCount";

const Types = () => {
  const handleGetTypes = useCallback(
    (limit, offset) =>
      typesCall(limit, offset)
      |> map(path(["data", "pokemon_v2_type"]))
      |> map(
        (list) =>
          list
          |> map(({ id, name }) => ({
            id,
            name,
            type: name,
          }))
      ),
    []
  );

  const handleGetCount = useCallback(
    () =>
      typesCount()
      |> map(path(["data", "pokemon_v2_type_aggregate", "aggregate", "count"])),
    []
  );

  return (
    <Layout>
      <Title>Types</Title>
      <CardsGrid
        variant={"type"}
        handleCall={handleGetTypes}
        paginationAmount={10}
        handleCount={handleGetCount}
      />
    </Layout>
  );
};

export default Types;

const Title = styled.p`
  margin: 15px auto;
  font-size: 30px;
`;
