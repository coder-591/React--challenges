import React from "react";
import Navbar from "./Navbar";
import Tabs from "./Tabs";

const DynamicTabs = () => {
  return (
    <>
     <div className="flex items-center justify-center">
         <div className="bg-cardColor w-full h-140 m-4 rounded-2xl border border-borderColor shadow-sm">
        <Navbar />
        <hr className=" border-borderColor outline-0 mt-4" />
        <Tabs/>
      </div>
     </div>
    </>
  );
};

export default DynamicTabs;
