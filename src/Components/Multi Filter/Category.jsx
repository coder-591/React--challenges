import React from "react";
import { useState } from "react";
import Brand from "./Brand";

const Category = () => {
  const [isActive, setIsActive] = useState("");

  const stateHandler = (e) => {
    // we can also use single state variable if we need one thing at a time
    setIsActive(e.target.textContent);
    // setState((prev) => {
    //   const updated = {};
    //   for (const key in prev) {
    //     updated[key] = false;
    //   }
    //   updated[targetValue] = true;
    //   return updated;
    // });
  };


  

  return (
    <>
      <h1 className="text-center font-bold text-3xl py-4">
        Multi Filter System
      </h1>

      <div className="flex items-center justify-center py-5 gap-10">
        <div
          onClick={stateHandler}
          className="border px-6 py-2 rounded-full hover:bg-white hover:text-black hover:font-bold cursor-pointer"
        >
          Category
        </div>

        <div
          onClick={stateHandler}
          className="border px-6 py-2 rounded-full hover:bg-white hover:text-black hover:font-bold cursor-pointer"
        >
          Brand
        </div>
        <div
          onClick={stateHandler}
          className="border px-6 py-2 rounded-full hover:bg-white hover:text-black hover:font-bold cursor-pointer"
        >
          Prices
        </div>
        <div
          onClick={stateHandler}
          className="border px-6 py-2 rounded-full hover:bg-white hover:text-black hover:font-bold cursor-pointer"
        >
          Rating
        </div>
      </div>

      {(isActive === "Brand" ||
        isActive === "Category" ||
        isActive === "Prices" ||
        isActive === "Rating") && <Brand itemName={isActive} />}
    </>
  );
};

export default Category;
