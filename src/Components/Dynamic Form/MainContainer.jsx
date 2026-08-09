import { useContext } from "react";
import LeftSideBar from "./LeftSideBar";
import MiddleBar from "./MiddleBar";
import PreviewForm from "./PreviewForm";
import RightSideBar from "./RightSideBar";
import { StoreContext } from "./Context/ContextApi";

const MainContainer = () => {
  const { isFormActive } = useContext(StoreContext);
  return (
    <>
      <div className="grid grid-cols-[350px_1fr_350px] grid-rows-2 gap-2 mt-4 mx-2 ">
        <div className="leftsideBar bg-cardColor rounded-2xl row-span-2 shadow-sm h-123 overflow-scroll dark:border dark:border-borderColor">
          <LeftSideBar />
        </div>

        <div className="topContent bg-cardColor dark:bg-cardColor rounded-2xl shadow-sm row-span-2 h-123 overflow-scroll  dark:border dark:border-borderColor">
          <MiddleBar />
        </div>

        <div className="rightsideBar bg-cardColor  row-span-2 rounded-2xl shadow-sm h-123 overflow-scroll dark:border dark:border-borderColor">
          <RightSideBar />
        </div>

        {isFormActive && (
          <div className="bottomContent bg-cardColor rounded-2xl shadow-sm col-span-3 min-h-40 mb-6  dark:border dark:border-borderColor">
            <PreviewForm />
          </div>
        )}
      </div>
    </>
  );
};

export default MainContainer;
