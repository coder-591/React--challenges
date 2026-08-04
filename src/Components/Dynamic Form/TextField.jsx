import { ChevronDown, Trash2 } from "lucide-react";
import Button from "./Button";
import { useContext, useState } from "react";
import { StoreContext } from "./Context/ContextApi";
import { textFields } from "./assets";

function TextField({ id }) {
  const {
    currField,
    setTitle,
    toggleBtn,
    setPlaceHolder,
    fieldsArr,
    requiredOnField,
  } = useContext(StoreContext);

  const changeHandler = (e) => {
    const currValue = e.target.placeholder;
    if (currValue === "Enter Label") {
      setTitle(e.target.value);
    }
    if (currValue === "Enter Place holder") {
      setPlaceHolder(e.target.value);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 mt-6 mb-4">
        {/* fieldType selection */}
        <div className="relative">
          <p className=" pl-2 font-semibold text-headingTextColor">
            Field Type
          </p>
          <input
            readOnly
            type="text"
            placeholder={`${currField.heading}`}
            className="inputCSS"
          />
          <ChevronDown className="absolute  right-4 top-8 cursor-pointer" />
        </div>

        {textFields.map((f) => (
          <div key={f} className="flex flex-col gap-1">
            <p className=" pl-2 font-semibold text-headingTextColor">{f}</p>
            {f === "Required" ? (
              <div className="flex items-center gap-2 ">
                <div
                  onClick={toggleBtn}
                  className={`w-12 h-7 rounded-2xl mx-2 border border-borderColor flex items-center justify-start px-0.5 cursor-pointer ${requiredOnField[id] ? "bg-hoverColor" : "bg-borderColor"} transition-all duration-300  `}
                >
                  <div
                    className={`bg-cardColor w-6 h-6 rounded-full border border-borderColor ${requiredOnField[id] && "translate-x-4.5"} transition-all duration-300 `}
                  />
                </div>

                {requiredOnField[id] && (
                  <p className="text-[13px] font-medium text-bodyTextColor">
                    This field is required
                  </p>
                )}
              </div>
            ) : (
              <input
                onChange={changeHandler}
                type="text"
                placeholder={`Enter ${f}`}
                className="pl-3 py-2 text-sm outline-0 border border-borderColor rounded-xl focus:border-hoverColor"
              />
            )}
          </div>
        ))}

        <Button
          text={"Delete"}
          icon={<Trash2 size={"20px"} color="#ff0000" />}
          textColor={"text-red-600"}
          border={"border border-red-400 hover:border-red-600"}
          bgcolor={"hover:bg-red-100"}
        />
      </div>
    </>
  );
}

export default TextField;
