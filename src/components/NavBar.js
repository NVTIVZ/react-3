import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const NavBar = () => {
  return (
    <Header>
      <Logo>POKEDEX</Logo>
      <Menu>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/pokemons">Pokemons</MenuItem>
        <MenuItem to="/types">Types</MenuItem>
      </Menu>
    </Header>
  );
};

export default NavBar;

const Header = styled.header`
  display: flex;
  background: ${({ theme }) => theme.main};
  min-height: 50px;
  padding: 0 15vw;
`;

const Logo = styled.div`
  background: black;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  width: 200px;
  font-size: x-large;
`;

const Menu = styled.div`
  display: flex;
  margin-left: auto;
`;

const MenuItem = styled(Link)`
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  font-size: larger;
  color: black;
  &:hover {
    background: black;
    color: white;
  }
`;
