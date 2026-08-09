import { FileOutput, Plus, X } from "lucide-react";
import Button from "./Button";
import Header from "./Header";
import Fields from "./Fields";
import { StoreContext } from "./Context/ContextApi";
import { useContext } from "react";

const Card = () => {
  const { isActive, setIsActive, addField } = useContext(StoreContext);
  return (
    <>
      <div className="bg-black/60 absolute inset-0 flex justify-center items-center">
        <div
          className="bg-cardColor  px-5 pt-8 w-120 h-120 rounded-xl dark:border-2   dark:border-borderColor shadow-sm transition-colors duration-300"
        >
          <div className="flex flex-col  gap-4">
            <div className="flex justify-between px-3">
              <Header
                heading={"Choose Field Type"}
                textPara={"Select the type of field you want to add"}
              />
              <X
                className="cursor-pointer text-iconColor"
                onClick={() => setIsActive((prev) => !prev)}
              />
            </div>
            <div className="h-75 overflow-scroll px-3 py-2 cardFieldScroll">
              <Fields />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Button
              text={"Cancel"}
              color={"bg-btnBgColor"}
              border={
                "border border-borderColor hover:border-borderActiveColor"
              }
              setterFunc={setIsActive}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
