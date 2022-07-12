import React, { useMemo, useState } from "react";
import PaginationPanel from "./PaginationPanel";
import Card from "./Card";
import "../styles/global.css";
import DetailsModal from "./DetailsModal";
import { length, map } from "ramda";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const CardsGrid = ({ data, paginationAmount, status }) => {
  const [pagination, setPagination] = useState(paginationAmount);
  const numberOfCards = data |> length;
  const { pathname } = useLocation();

  return (
    <>
      <Grid>
        <PaginationPanel
          pagination={pagination}
          setPagination={setPagination}
          paginationAmount={paginationAmount}
          numberOfCards={numberOfCards}
        />
        {data
          |> map(({ name, id, type }) => {
            if (id <= pagination && id > pagination - paginationAmount) {
              return (
                <Card
                  key={id}
                  id={id}
                  type={type}
                  name={name}
                  pathname={pathname}
                />
              );
            }
          })}
      </Grid>
    </>
  );
};

export default CardsGrid;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 25px 15vw;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    margin: 25px 15vw;
  }
`;
