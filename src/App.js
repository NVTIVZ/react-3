import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Types from "./pages/Types";
import Pokemons from "./pages/Pokemons";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import PokemonDetail from "./pages/PokemonDetail";
import TypeDetail from "./pages/TypeDetail";

const theme = {
  main: "#f52c2c",
  grass: "rgba(0, 171, 20,0.2)",
  normal: "rgba(153, 146, 145,0.2)",
  fighting: "rgba(143, 0, 14,0.2)",
  flying: "rgba(189, 249, 255,0.2)",
  poison: "rgba(129, 2, 171,0.2)",
  ground: "rgba(122, 47, 24,0.2)",
  rock: "rgba(140, 138, 137,0.2)",
  bug: "rgba(60, 201, 60,0.2)",
  ghost: "rgba(107, 10, 171,0.2)",
  steel: "rgba(64, 64, 64,0.2)",
  fire: "rgba(255, 25, 25,0.2)",
  water: "rgba(56, 129, 255,0.2)",
  electric: "rgba(255, 240, 110,0.2)",
  psychic: "rgba(188, 99, 247,0.2)",
  ice: "rgba(186, 213, 232,0.2)",
  dragon: "rgba(117, 72, 57,0.2)",
  dark: "rgba(102, 80, 117,0.2)",
  fairy: "rgba(247, 240, 171,0.2)",
  shadow: "rgba(38, 33, 41,0.2)",
};

const GlobalStyle = createGlobalStyle`
  body,
  form,
  fieldset,
  ol,
  ul,
  li,
  h1,ó
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
  }
  body {
    overflow-y: scroll;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/types">
          <Route path="" element={<Types />} />
          <Route path=":modalId" element={<TypeDetail />} />
        </Route>
        <Route path="/pokemons">
          <Route path="" element={<Pokemons />} />
          <Route path=":modalId" element={<PokemonDetail />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
