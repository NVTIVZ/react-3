import React, { useCallback, useEffect, useState } from "react";
import PaginationPanel from "./PaginationPanel";
import Card from "./Card";
import "../styles/global.css";
import { cond, equals, map } from "ramda";
import styled from "styled-components";
import { fork } from "fluture";
import ErrorMessage from "./ErrorMessage";
import LoadingSpinner from "./LoadingSpinner";

const CardsGrid = ({ paginationAmount, handleCall, handleCount, variant }) => {
  const [pagination, setPagination] = useState(paginationAmount);
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("LOADING");
  const [numberOfCards, setNumberOfCards] = useState(0);

  const consumeHandleCall = useCallback(() => {
    handleCall()
      |> fork(() => setStatus("ERROR"))((res) => {
        setData(res);
        setStatus("SUCCESS");
      });
  }, [handleCall]);

  const consumeHandleCount = useCallback(() => {
    handleCount()
      |> fork(() => setStatus("ERROR"))((res) => {
        setNumberOfCards(res);
      });
  }, [handleCount]);

  useEffect(() => {
    consumeHandleCall();
    consumeHandleCount();
  }, []);
  return (
    <>
      {cond([
        [equals("ERROR"), () => <ErrorMessage refresh={consumeHandleCall} />],
        [equals("LOADING"), () => <LoadingSpinner />],
        [
          equals("SUCCESS"),
          () => (
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
                        variant={variant}
                      />
                    );
                  }
                })}
            </Grid>
          ),
        ],
      ])(status)}
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
