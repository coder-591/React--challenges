import { FileOutput, Plus } from "lucide-react";
import React, { useContext } from "react";
import Button from "./Button";
import { StoreContext } from "./Context/ContextApi";

const NoFieldCard = () => {
  const { setIsActive } = useContext(StoreContext);
  return (
    <>
      <div className="flex items-center justify-center m-20 border-2 border-borderActiveColor rounded-2xl border-dashed bg-lightPurpleColor">
        <div className="flex flex-col items-center justify-center gap-4 px-10 py-15">
          <span className="flex items-center justify-center  w-13 h-13 rounded-lg bg-cardColor border  not-only:border-borderColor">
            <FileOutput size={"28px"} />
          </span>
          <h3 className="font-semibold text-headingTextColor">
            No fields added yet
          </h3>
          <p className="w-56 text-center text-sm font-medium text-bodyTextColor">
            Drag fields from the left panel or click the button below
          </p>

          <Button
            text={"Add Field"}
            icon={<Plus size={"20px"} color="#fff" />}
            bgcolor={"bg-btnBgPurpleColor"}
            textColor={"text-btnPurpleTextColor"}
            setterFunc={setIsActive}
          />
        </div>
      </div>
    </>
  );
};

export default NoFieldCard;
