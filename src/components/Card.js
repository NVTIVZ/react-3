import React from "react";
import "../styles/global.css";
import styled from "styled-components";
import Button from "./Button";

const Card = ({ name, description, setModal, players, pathname }) => {
  return (
    <Item>
      <CardContainer>
        <Image src={`.${pathname}.svg`} alt={"avatar"} />
        <Content>
          <Title>{name}</Title>
          <Description>{description}</Description>
          <Button
            onClick={() => setModal({ name, description, players, pathname })}
          >
            Details
          </Button>
        </Content>
      </CardContainer>
    </Item>
  );
};

export default Card;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const CardContainer = styled.div`
  width: 250px;
  height: 300px;
  background: #ef7f4d;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  height: 120px;
  margin: auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  margin: 3px auto;
  font-size: 20px;
  font-weight: 500;
`;
const Description = styled.p`
  margin: 5px 10px 10px 10px;
  height: 55px;
  overflow: hidden;
`;
