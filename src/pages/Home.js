import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <Container>
        <PlayersSide>
          <StyledLink to={"/pokemons"}>
            <Mask>Go to Pokemons</Mask>
          </StyledLink>
        </PlayersSide>
        <TeamsSide>
          <StyledLink to={"/types"}>
            <Mask>Go to Types</Mask>
          </StyledLink>
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
  background-image: url("/original.jpg");
  background-repeat: no-repeat;
  background-position: center;
  width: 600px;
`;
const TeamsSide = styled.div`
  width: 600px;
  background-image: url("/types.png");
  background-repeat: no-repeat;
  background-position: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
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
