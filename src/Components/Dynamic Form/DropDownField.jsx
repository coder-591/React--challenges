import { ChevronDown, IdCard, Plus, Trash2, X } from "lucide-react";
import { dropDownFields } from "./assets";
import { useContext } from "react";
import { StoreContext } from "./Context/ContextApi";
import Button from "./Button";

const DropDownField = () => {
  const { currField, toggleBtn, setTitle, isOn } = useContext(StoreContext);

  const changeHandler = (e) => {
    const currValue = e.target.placeholder;
    if (currValue === "Enter Label") {
      setTitle(e.target.value);
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
            className="w-full pl-3 py-2 text-sm outline-0 border border-borderColor rounded-xl focus:border-hoverColor"
          />
          <ChevronDown className="absolute  right-4 top-8 cursor-pointer" />
        </div>

        {dropDownFields.map((f) => (
          <div key={f} className="flex flex-col gap-1">
            <p className=" pl-2 font-semibold text-headingTextColor">{f}</p>
            {f === "Required" ? (
              <div className="flex items-center gap-2 ">
                <div
                  onClick={() => toggleBtn()}
                  className={`w-12 h-7 rounded-2xl mx-2 border border-borderColor flex items-center justify-start px-0.5 cursor-pointer ${isOn ? "bg-hoverColor" : "bg-borderColor"} transition-all duration-300  `}
                >
                  <div
                    className={`bg-cardColor w-6 h-6 rounded-full border border-borderColor ${isOn && "translate-x-4.5"} transition-all duration-300 `}
                  />
                </div>

                {isOn && (
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

        <div className="flex flex-col gap-2">
          <p className=" pl-2 font-semibold text-headingTextColor">Options</p>
          {/* option container */}
          <div
            className="flex flex-col gap-2 px-3 py-2 w-full min-h-15 max-h-30 cursor-pointer
            overflow-scroll scrollbar-none border bg-cardColor shadow-sm border-borderColor
             rounded-xl "
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1">
                <IdCard color="#7a7a7a" size={"22px"} />
                <p className="text-sm font-medium capitalize"> pakistan</p>
              </span>
              <X size={"20px"} color="#7a7a7a" className="" />
            </div>
          </div>

          <span className=" pl-2 flex items-center cursor-pointer">
            <Plus size={"20px"} color="#5b4ae8" />
            <h5 className="text-purpleColor font-semibold text-sm">
              Add Option
            </h5>
          </span>
        </div>

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
};

export default DropDownField;
