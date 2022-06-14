import React, { useMemo, useState } from "react";
import PaginationPanel from "./PaginationPanel";
import Card from "./Card";
import "../styles/global.css";
import DetailsModal from "./DetailsModal";
import { length } from "ramda";
import { useLocation } from "react-router-dom";

const CardsGrid = ({ data, paginationAmount }) => {
  const [pagination, setPagination] = useState(paginationAmount);
  const [modal, setModal] = useState();
  const dataLength = useMemo(() => length(data), [data]);
  const { pathname } = useLocation();
  return (
    <>
      <div className={"grid"}>
        <PaginationPanel
          pagination={pagination}
          setPagination={setPagination}
          paginationAmount={paginationAmount}
          dataLength={dataLength}
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
      </div>
      {modal && <DetailsModal setModal={setModal} modal={modal} />}
    </>
  );
};

export default CardsGrid;
