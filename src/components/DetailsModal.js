import React, { useCallback, useEffect, useState } from "react";
import "../styles/global.css";
import { cond, equals, prop } from "ramda";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import mapWithKey from "../utils/mapWithKey";
import ErrorMessage from "./ErrorMessage";
import { fork } from "fluture";

const PokemonView = ({ data }) => {
  const { name, id, height, weight, base_experience, pokemon_v2_pokemonstats } =
    data;
  return (
    <>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={"avatar"}
      />
      <Content>
        <Title>Name: {name}</Title>
        <Title>Height: {height}</Title>
        <Title>Weight: {weight}</Title>
        <Title>Base Experience: {base_experience}</Title>
        <Title>Stats:</Title>
        <List>
          {pokemon_v2_pokemonstats
            |> mapWithKey(({ base_stat, pokemon_v2_stat }, index) => (
              <ListItem key={index}>
                {pokemon_v2_stat |> prop("name")}: {base_stat}
              </ListItem>
            ))}
        </List>
      </Content>
    </>
  );
};

const TypeView = ({ data }) => {
  const { name, pokemon_v2_pokemontypes } = data;

  return (
    <>
      <Placeholder>Placeholder</Placeholder>
      <Content>
        <Title>Name: {name}</Title>
        <Title>Pokemons:</Title>
        <PokemonList>
          {pokemon_v2_pokemontypes
            |> mapWithKey(({ pokemon_v2_pokemon }, index) => (
              <ListItem key={index}>
                {pokemon_v2_pokemon |> prop("name")}
              </ListItem>
            ))}
        </PokemonList>
      </Content>
    </>
  );
};

const DetailsModal = ({ variant, handleCall }) => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("LOADING");
  const consumeHandleCall = useCallback(() => {
    setStatus("LOADING");
    handleCall()
      |> fork(() => setStatus("ERROR"))((res) => {
        setData(res);
        setStatus("SUCCESS");
      });
  }, [handleCall]);
  useEffect(() => {
    consumeHandleCall();
  }, []);
  return (
    <Background>
      <Modal>
        {status
          |> cond([
            [equals("LOADING"), () => <LoadingSpinner />],
            [
              equals("SUCCESS"),
              () => (
                <>
                  {variant
                    |> cond([
                      [equals("pokemon"), () => <PokemonView data={data} />],
                      [equals("type"), () => <TypeView data={data} />],
                    ])}
                  <Link to={`/${variant}s`}>
                    <ModalButton>X</ModalButton>
                  </Link>
                </>
              ),
            ],
            [equals("ERROR"), () => <ErrorMessage />],
          ])}
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
  flex-grow: 1;
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
const PokemonList = styled.ul`
  list-style: none;
  overflow-y: scroll;
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

const Placeholder = styled.div`
  background: white;
  height: 300px;
  width: 200px;
  margin: auto 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
