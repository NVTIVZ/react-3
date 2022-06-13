import React, { useEffect, useState } from "react";
import { getPlayers, getTeams } from "./fakeBackend/api";

const App = () => {
  const [data, setData] = useState();
  console.log("data", data);
  useEffect(() => {
    getTeams(10)
      .then((response) => setData(response))
      .catch(console.error);
  }, []);
  return <div>Hello</div>;
};

export default App;
