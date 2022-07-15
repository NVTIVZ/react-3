import React, { useCallback, useEffect, useState } from "react";
import PaginationPanel from "./PaginationPanel";
import Card from "./Card";
import { cond, equals, map } from "ramda";
import styled from "styled-components";
import { fork } from "fluture";
import ErrorMessage from "./ErrorMessage";
import LoadingSpinner from "./LoadingSpinner";

const CardsGrid = ({ paginationAmount, handleCall, handleCount, variant }) => {
  const [pagination, setPagination] = useState(0);
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("LOADING");
  const [numberOfCards, setNumberOfCards] = useState(0);
  console.log(pagination);
  const consumeHandleCall = useCallback(() => {
    setStatus("LOADING");
    handleCall(paginationAmount, pagination)
      |> fork(() => setStatus("ERROR"))((res) => {
        setData(res);
        setStatus("SUCCESS");
      });
  }, [handleCall, pagination, paginationAmount]);

  const consumeHandleCount = useCallback(() => {
    handleCount()
      |> fork(() => setStatus("ERROR"))((res) => {
        setNumberOfCards(res);
      });
  }, [handleCount]);

  const handleRefresh = useCallback(() => {
    consumeHandleCount();
    consumeHandleCall();
  }, [consumeHandleCount, consumeHandleCall]);

  useEffect(() => {
    consumeHandleCount();
  }, []);

  useEffect(() => {
    consumeHandleCall();
  }, [pagination]);
  return (
    <>
      <PaginationPanel
        pagination={pagination}
        setPagination={setPagination}
        paginationAmount={paginationAmount}
        numberOfCards={numberOfCards}
      />
      {cond([
        [equals("ERROR"), () => <ErrorMessage onRefresh={handleRefresh} />],
        [equals("LOADING"), () => <LoadingSpinner />],
        [
          equals("SUCCESS"),
          () => (
            <Grid>
              {data
                |> map(({ name, id, type }) => {
                  if (id <= pagination + paginationAmount && id > pagination) {
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
