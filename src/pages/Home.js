import React, { useEffect } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { Link } from "react-router-dom";
import testCall from "../api/qqlCalls/testCall";
import { chain, encase, encaseP, fork } from "fluture";
import { invoker, map, prop } from "ramda";

const Home = () => {
  useEffect(() => {
    testCall({ limit: 10 })
      |> map((res) => prop("data")(res))
      |> map((data) => prop("pokemon_v2_pokemon")(data))
      |> fork(console.error)(console.log);
  }, []);
  return (
    <Layout>
      <Container>
        <PlayersSide>
          <Link to={"/players"}>
            <Mask>Go to players</Mask>
          </Link>
        </PlayersSide>
        <TeamsSide>
          <Link to={"/teams"}>
            <Mask>Go to Teams</Mask>
          </Link>
        </TeamsSide>
      </Container>
    </Layout>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;

const PlayersSide = styled.div`
  background-image: url("/harden.jpg");
  background-repeat: no-repeat;
  background-position: center;
  width: 600px;
  a {
    text-decoration: none;
  }
`;
const TeamsSide = styled.div`
  width: 600px;
  background-image: url("/team.jpg");
  background-repeat: no-repeat;
  background-position: center;
  a {
    text-decoration: none;
  }
`;

const Mask = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 45px;
  color: white;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;
