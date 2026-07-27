import { useContext, useState } from "react";
import NoFieldCard from "./NoFieldCard";
import { StoreContext } from "./Context/ContextApi";
import Card from "./Card";

const MiddleBar = () => {
  const {isActive} = useContext(StoreContext)

  return (
    <>
      {isActive? <Card />: <NoFieldCard />}
    </>
  );
};

export default MiddleBar;
