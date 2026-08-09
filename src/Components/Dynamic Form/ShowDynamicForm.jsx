import MainContainer from "./MainContainer";
import Navbar from "./Navbar";
import Card from "./Card";
import { useContext } from "react";
import { StoreContext } from "./Context/ContextApi";

const ShowDynamicForm = () => {
  const { isMode } = useContext(StoreContext);

  return (
    <>
      <div
        className={`min-h-screen w-full bg-(--color-bgDark) transition-colors duration-300 pt-3 ${
          isMode === "dark" ? "dark" : ""
        }`}
      >
        <Navbar />
        <MainContainer />
      </div>
    </>
  );
};

export default ShowDynamicForm;
