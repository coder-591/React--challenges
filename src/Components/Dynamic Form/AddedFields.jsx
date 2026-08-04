import { GripVertical, Pencil, Plus, Trash2 } from "lucide-react";
import Header from "./Header";
import Button from "./Button";
import { useContext } from "react";
import { StoreContext } from "./Context/ContextApi";

const AddedFields = () => {
  const { setIsActive, fieldsArr, titledOnField, currentField } =
    useContext(StoreContext);

  const clickHandler = (f) => {
    currentField(f);
  };

  return (
    <>
      <div className="px-5 pt-5 flex flex-col gap-5 mb-6">
        <Header heading={"Form Fields"} textPara={"Drag fields to reorder"} />

        {fieldsArr.map((f) => (
          <div
            onClick={() => clickHandler(f)}
            key={f.id}
            className="border border-borderColor shadow-sm px-4 py-4 cursor-pointer rounded-xl hover:border-borderActiveColor hover:-translate-y-1 transition-all flex items-center justify-between"
          >
            <div className="flex items-center justify-start gap-3">
              <GripVertical color="#7a7a7a" />

              <span className="text-black w-10 h-10 flex items-center justify-center border border-borderColor bg-lightPurpleColor shadow-sm rounded-xl">
                {f.icon}
              </span>

              <span className="flex flex-col items-start">
                <h4 className="text-sm font-semibold text-headingTextColor">
                  {titledOnField[f.id]}
                </h4>

                <p className="text-[13px] font-medium text-bodyTextColor">
                  {f.heading}
                </p>
              </span>
            </div>

            <div className="flex items-center justify-end gap-2">
              <span className="text-black w-10 h-10 flex items-center justify-center border border-borderColor bg-lightPurpleColor shadow-sm rounded-xl">
                <Pencil size={"20px"} />
              </span>

              <span className="text-black w-10 h-10 flex items-center justify-center border border-borderColor bg-lightPurpleColor shadow-sm rounded-xl">
                <Trash2 size={"20px"} />
              </span>
            </div>
          </div>
        ))}

        <Button
          text={"Add Field"}
          icon={<Plus size={"20px"} color="#5b4ae8" />}
          bgcolor={"bg-lightPurpleColor"}
          textColor={"text-purpleColor"}
          border={"border border-dashed border-borderActiveColor"}
          setterFunc={setIsActive}
        />
      </div>
    </>
  );
};

export default AddedFields;
