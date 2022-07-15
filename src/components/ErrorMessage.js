import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ErrorMessage = ({ onRefresh }) => {
  return (
    <Container>
      <Error>Failed to load players</Error>
      <Button onClick={onRefresh}>Refresh</Button>
    </Container>
  );
};

export default ErrorMessage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const Error = styled.div`
  color: red;
  font-size: 30px;
`;
