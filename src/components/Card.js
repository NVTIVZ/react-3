import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
import { cond, equals, ifElse } from "ramda";

const Card = ({ id, name, variant, type }) => {
  return (
    <Item>
      <CardContainer type={type}>
        {variant
          |> ifElse(
            equals("pokemon"),
            () => (
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt={"avatar"}
              />
            ),
            () => <Placeholder>Placeholder</Placeholder>
          )}
        <Content>
          <Title>{name}</Title>
          <Link to={`/${variant}s/${id}`}>
            <Button>Details</Button>
          </Link>
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
  background: ${({ theme, type }) => theme[type]};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  height: 180px;
  margin: auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  margin: 3px auto;
  font-size: 24px;
  font-weight: 500;
`;

const Placeholder = styled.div`
  background: white;
  height: 150px;
  width: 200px;
  margin: auto 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
