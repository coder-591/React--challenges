import { ChevronDown, Trash2 } from "lucide-react";
import Button from "./Button";
import { useState } from "react";

function TextField({ arr }) {
  const [fieldType, setFieldType] = useState(arr);

  return (
    <>
      <div className="flex flex-col gap-4 mt-6 mb-4">
        {fieldType.map((f) => (
          <div key={f} className="flex flex-col gap-1">
            <p className=" pl-2 font-semibold text-headingTextColor">{f}</p>
            {f === fieldType[0] ? (
              <div className="relative  ">
                <input
                  readOnly
                  type="text"
                  placeholder={`Select ${f}`}
                  className="w-full pl-3 py-2 text-sm outline-0 border border-borderColor rounded-xl focus:border-hoverColor"
                />
                <ChevronDown className="absolute  right-4 top-2 cursor-pointer" />
              </div>
            ) : f === "Required" ? (
              "toggle button"
            ) : (
              <input
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
