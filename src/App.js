import React, { useEffect, useState } from "react";
import { getPlayers, getTeams } from "./fakeBackend/api";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Players from "./pages/Players";

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
