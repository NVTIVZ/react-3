import React, { useEffect, useMemo, useState } from "react";
import Layout from "../components/Layout";
import { getPlayers } from "../fakeBackend/api";
import CardsGrid from "../components/CardsGrid";
import { isEmpty, pipe, prop, sortBy } from "ramda";
import LoadingSpinner from "../components/LoadingSpinner";

const Players = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const sortedData = useMemo(
    () => pipe(sortBy(prop("name")), sortBy(prop("surname")))(data),
    [data]
  );

  useEffect(() => {
    getPlayers(2000).then(setData).catch(setError);
  }, []);

  return (
    <Layout>
      <p className={"title"}>Players</p>
      {isEmpty(data) && !error && <LoadingSpinner />}
      {!isEmpty(data) && <CardsGrid data={sortedData} paginationAmount={20} />}
      {error && <div className={"error"}>Failed to load players</div>}
    </Layout>
  );
};

export default Players;
