import React from "react";
import "../styles/global.css";
const PaginationPanel = ({
  pagination,
  setPagination,
  paginationAmount,
  dataLength,
}) => {
  return (
    <div className="panel">
      <p className={"panel__title"}>Pagination</p>
      <div className={"panel__info"}>
        {pagination / paginationAmount}/{dataLength / paginationAmount}
      </div>
      <div className={"panel__buttons"}>
        <div className={"panel__button"}>
          {!(pagination === paginationAmount) && (
            <button
              className="button"
              onClick={() => setPagination(pagination - paginationAmount)}
            >
              Previous
            </button>
          )}
        </div>
        <div className={"panel__button"}>
          {!(pagination === dataLength) && (
            <button
              className="button"
              onClick={() => setPagination(pagination + paginationAmount)}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaginationPanel;
