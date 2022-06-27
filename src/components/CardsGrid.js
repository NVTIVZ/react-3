import React, { useMemo, useState } from "react";
import PaginationPanel from "./PaginationPanel";
import Card from "./Card";
import "../styles/global.css";
import DetailsModal from "./DetailsModal";
import { length } from "ramda";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const CardsGrid = ({ data, paginationAmount, status }) => {
  const [pagination, setPagination] = useState(paginationAmount);
  const [modal, setModal] = useState();
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
        {data.map(
          ({ name, surname = "", description, playerNames = [] }, index) => {
            if (index <= pagination && index > pagination - paginationAmount) {
              return (
                <Card
                  key={index}
                  name={`${name} ${surname}`}
                  description={description}
                  setModal={setModal}
                  players={playerNames}
                  pathname={pathname}
                />
              );
            }
          }
        )}
      </Grid>
      {modal && <DetailsModal setModal={setModal} modal={modal} />}
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
