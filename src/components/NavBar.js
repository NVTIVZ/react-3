import React from "react";
import "../styles/global.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
const NavBar = () => {
  return (
    <Header>
      <Logo>React-2</Logo>
      <Menu>
        <Link to="/">Home</Link>
        <Link to="/players">Players</Link>
        <Link to="/teams">Teams</Link>
      </Menu>
    </Header>
  );
};

export default NavBar;

const Header = styled.header`
  display: flex;
  background: #ef7f4d;
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
  a {
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    font-size: larger;
    color: black;
  }
  a:hover {
    background: black;
    color: white;
  }
`;
