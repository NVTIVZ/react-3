import React from "react";
import Button from "./Button";
import styled from "styled-components";

const PaginationPanel = ({
  pagination,
  setPagination,
  paginationAmount,
  numberOfCards,
}) => {
  return (
    <Panel>
      <Title>Pagination</Title>
      <Info>
        {(pagination + paginationAmount) / paginationAmount}/
        {numberOfCards / paginationAmount |> Math.ceil}
      </Info>
      <ButtonsContainer>
        <ButtonContainer>
          {!(pagination + paginationAmount === paginationAmount) && (
            <Button
              onClick={() => setPagination(pagination - paginationAmount)}
            >
              Previous
            </Button>
          )}
        </ButtonContainer>
        <ButtonContainer>
          {!(
            (pagination + paginationAmount) / paginationAmount ===
            Math.ceil(numberOfCards / paginationAmount)
          ) && (
            <Button
              onClick={() => setPagination(pagination + paginationAmount)}
            >
              Next
            </Button>
          )}
        </ButtonContainer>
      </ButtonsContainer>
    </Panel>
  );
};

export default PaginationPanel;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 25px;
  top: 100px;
  height: 110px;
  border-radius: 5px;
  border: 2px solid black;

  background: ${({ theme }) => theme.main};
  width: 260px;
  z-index: 99;
`;

const Title = styled.p`
  font-size: 18px;
  margin: 5px auto;
`;

const Info = styled.div`
  font-weight: 600;
  margin: 5px auto;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ButtonContainer = styled.div`
  width: 120px;
`;
