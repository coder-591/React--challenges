import { useContext, useState } from "react";
import NoFieldCard from "./NoFieldCard";
import { StoreContext } from "./Context/ContextApi";
import Card from "./Card";
import AddedFields from "./AddedFields";

const MiddleBar = () => {
  const { isActive, fieldsArr } = useContext(StoreContext);

  return (
    <>
      {isActive ? (
        <Card />
      ) : fieldsArr.length > 0 ? (
        <AddedFields />
      ) : (
        <NoFieldCard />
      )}
    </>
  );
};

export default MiddleBar;
