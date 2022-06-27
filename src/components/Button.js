import React from "react";
import styled from "styled-components";

const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  background: transparent;
  border: 3px solid black;
  width: 120px;
  height: 40px;
  font-size: large;
  cursor: pointer;
  margin: 5px auto;
  transition: 0.2s ease-in-out;
  &:hover {
    background: rgba(0, 0, 0, 0.15);
  }
`;
