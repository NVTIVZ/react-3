import { useParams } from "react-router-dom";
import React, { useCallback, useState } from "react";
import { map, path } from "ramda";
import DetailsModal from "../components/DetailsModal";
import typeCall from "../api/qqlCalls/typeCall";

const TypeDetail = () => {
  const { modalId } = useParams();

  const handleGetType = useCallback(() => {
    return typeCall(modalId) |> map(path(["data", "pokemon_v2_type_by_pk"]));
  }, []);

  return <DetailsModal variant={"type"} handleCall={handleGetType} />;
};

export default TypeDetail;
