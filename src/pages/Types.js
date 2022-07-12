import React, { useCallback, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { cond, equals, map, path, prop, sortBy } from "ramda";
import CardsGrid from "../components/CardsGrid";
import LoadingSpinner from "../components/LoadingSpinner";
import { fork } from "fluture";
import ErrorMessage from "../components/ErrorMessage";
import styled from "styled-components";

import typesCall from "../api/qqlCalls/typesCall";

const Types = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("LOADING");

  const handleGetTypes = useCallback(() => {
    setStatus("LOADING");
    typesCall()
      |> map(path(["data", "pokemon_v2_type"]))
      |> map(
        (list) =>
          list
          |> map(({ id, name }) => ({
            id,
            name,
            type: name,
          }))
      )
      |> fork(() => setStatus("ERROR"))((res) => {
        setData(res);
        setStatus("SUCCESS");
      });
  }, []);
  console.log(data);
  useEffect(() => {
    handleGetTypes();
  }, []);

  return (
    <Layout>
      <Title>Teams</Title>
      {cond([
        [equals("ERROR"), () => <ErrorMessage refresh={handleGetTypes} />],
        [equals("LOADING"), () => <LoadingSpinner />],
        [
          equals("SUCCESS"),
          () => <CardsGrid data={data} paginationAmount={10} />,
        ],
      ])(status)}
    </Layout>
  );
};

export default Types;

const Title = styled.p`
  margin: 15px auto;
  font-size: 30px;
`;
