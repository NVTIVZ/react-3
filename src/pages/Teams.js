import React, { useCallback, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { cond, equals, map, prop, sortBy } from "ramda";
import { getTeams } from "../fakeBackend/api";
import CardsGrid from "../components/CardsGrid";
import LoadingSpinner from "../components/LoadingSpinner";
import { fork } from "fluture";
import ErrorMessage from "../components/ErrorMessage";
import styled from "styled-components";

const Teams = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("LOADING");

  const handleGetTeams = useCallback(() => {
    setStatus("LOADING");
    getTeams(2000)
      |> map((x) => x |> sortBy(prop("name")))
      |> fork(() => setStatus("ERROR"))((res) => {
        setData(res);
        setStatus("SUCCESS");
      });
  }, []);

  useEffect(() => {
    handleGetTeams();
  }, []);

  return (
    <Layout>
      <Title>Teams</Title>
      {cond([
        [equals("ERROR"), () => <ErrorMessage refresh={handleGetTeams} />],
        [equals("LOADING"), () => <LoadingSpinner />],
        [
          equals("SUCCESS"),
          () => <CardsGrid data={data} paginationAmount={10} />,
        ],
      ])(status)}
    </Layout>
  );
};

export default Teams;

const Title = styled.p`
  margin: 15px auto;
  font-size: 30px;
`;
