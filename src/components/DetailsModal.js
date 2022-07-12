import React from "react";
import "../styles/global.css";
import { equals, isEmpty, map, prop } from "ramda";
import styled from "styled-components";
import Button from "./Button";
import { Link, useLocation, useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const DetailsModal = ({ data, variant, status }) => {
  const { name, id, height, weight, base_experience, pokemon_v2_pokemonstats } =
    data;
  return (
    <Background>
      <Modal>
        {equals("LOADING", status) ? (
          <LoadingSpinner />
        ) : (
          <>
            <>
              {variant === "pokemon" ? (
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                  alt={"avatar"}
                />
              ) : (
                "Placeholder"
              )}
            </>

            <Content>
              <Title>Name: {name}</Title>
              <Title>Height: {height}</Title>
              <Title>Weight: {weight}</Title>
              <Title>Base Experience: {base_experience}</Title>
              <Title>Stats:</Title>
              <List>
                {pokemon_v2_pokemonstats.map(
                  ({ base_stat, pokemon_v2_stat }, index) => (
                    <ListItem key={index}>
                      {" "}
                      {pokemon_v2_stat |> prop("name")}: {base_stat}
                    </ListItem>
                  )
                )}
              </List>
            </Content>
            <Link to={`/${variant}s`}>
              <ModalButton>X</ModalButton>
            </Link>
          </>
        )}
      </Modal>
    </Background>
  );
};

export default DetailsModal;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  z-index: 999;
`;

const Modal = styled.div`
  margin: auto;
  background: lightblue;
  width: 700px;
  height: 500px;
  display: flex;
  position: relative;
`;

const Image = styled.img`
  height: 300px;
  margin: auto 15px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-top: 15px;
`;

const Text = styled.p`
  margin: 3px 10px;
`;

const List = styled.ul`
  list-style: none;
`;
const ListItem = styled.li`
  margin: 3px 10px;
`;

const ModalButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background: rgba(0, 0, 0, 0.15);
  }
`;
