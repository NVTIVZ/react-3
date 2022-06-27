import React from "react";
import "../styles/global.css";
import { isEmpty } from "ramda";
import styled from "styled-components";
import Button from "./Button";

const DetailsModal = ({ modal, setModal }) => {
  const { name, description, players, pathname } = modal;
  return (
    <Background>
      <Modal>
        <Image src={`.${pathname}.svg`} alt={"image"} />
        <Content>
          <Title>Name:</Title>
          <Text>{name}</Text>
          <Title>Description:</Title>
          <Text>{description}</Text>
          <Title>{!isEmpty(players) && "Players:"}</Title>
          <List>
            {!isEmpty(players) &&
              players.map((player) => <Player key={player}>{player}</Player>)}
          </List>
        </Content>
        <ModalButton onClick={() => setModal()}>X</ModalButton>
      </Modal>
    </Background>
  );
};

export default DetailsModal;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  position: fixed;
  z-index: 999;
`;

const Modal = styled.div`
  margin: auto;
  background: #ef7f4d;
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
const Player = styled.li`
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
