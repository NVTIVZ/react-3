import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Players from "./pages/Players";
import "./styles/global.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="teams" element={<Teams />} />
      <Route path="players" element={<Players />} />
    </Routes>
  );
};

export default App;
