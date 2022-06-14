import React, { useEffect, useMemo, useState } from "react";
import Layout from "../components/Layout";
import { isEmpty, prop, sortBy } from "ramda";
import { getTeams } from "../fakeBackend/api";
import CardsGrid from "../components/CardsGrid";
import LoadingSpinner from "../components/LoadingSpinner";

const Teams = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const sortedData = useMemo(() => sortBy(prop("name"))(data), [data]);

  useEffect(() => {
    getTeams(2000).then(setData).catch(setError);
  }, []);
  return (
    <Layout>
      <p className={"title"}>Teams</p>
      {isEmpty(data) && !error && <LoadingSpinner />}
      {!isEmpty(data) && <CardsGrid data={sortedData} paginationAmount={10} />}
      {error && <div className={"error"}>Failed to load teams</div>}
    </Layout>
  );
};

export default Teams;
