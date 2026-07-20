import React from "react";
import SearchBar from "./Components/Debonce/SearchBar";
import Suggestion from "./Components/Debonce/Suggestion";
import Category from "./Components/Multi Filter/Category";
import ShowItems from "./Components/ShoppingCart/ShowItems";
import Cart from "./Components/ShoppingCart/Cart";
import InfiniteFeed from "./Components/InfiniteFeed/InfiniteFeed";
import SortingTable from "./Components/SortingTable/SortingTable";
import MultiStepForms from "./Components/MultiStepForm/MultiStepForms";

const App = () => {
  return (
    <>
      {/* # 1 problem Debounce Input*/}
      {/* <Suggestion /> */}
      {/* # 2 problem Multi filter */}
      {/* <Category /> */}
      {/* # 3 problem Shopping cart */}
      {/* <ShowItems />
      <Cart/> */}
      {/* # 4 problem infinite scrolling feed */}
      {/* <InfiniteFeed /> */}
      {/* # 6 problem Sorting table */}
      {/* <SortingTable /> */}
       {/* # 7 problem Sorting table */}
       <MultiStepForms />
      
    </>
  );
};

export default App;
