import React from "react";

const MainContainer = () => {
  return (
    <>
      <div className="grid grid-cols-[340px_1fr_340px] grid-rows-2 gap-2 mt-4 mx-2 max-h-123">
        <div className="rightsideBar overflow-scroll bg-cardColor row-span-2  rounded-2xl shadow-sm">
          <p>1</p>
        </div>
        <div className="topContent overflow-scroll   bg-cardColor rounded-2xl shadow-[0 8px 20px rgba(15,23,42,.05)] max-h-59">
          <p>2</p>
        </div>
        <div className="leftsideBar overflow-scroll bg-cardColor row-span-2  rounded-2xl shadow-sm">
          <p>3</p>
        </div>
        <div className="bottomContent overflow-scroll bg-cardColor rounded-2xl shadow-sm min-h-59 ">
          <p>4</p>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
