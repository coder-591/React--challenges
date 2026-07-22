import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";

const FormFooter = ({ resultValue, stepCount, setStepCount }) => {
  const clickHandler = (e) => {
    const text = e.target.innerText;
    if (text === "Continue") {
      setStepCount((c) => Math.min(c + 1, 4));
    } else {
      setStepCount((c) => Math.max(c - 1, 1));
    }
  };

  return (
    <>
      <div className="flex items-center justify-between px-6">
        {stepCount > 1 && (
          <button
            onClick={clickHandler}
            className="flex items-center  rounded-xl border border-[#e5e7eb] pl-2 pr-4 pt-2 pb-2 text-sm cursor-pointer "
          >
            <ChevronLeft size={"18px"} />
            Back
          </button>
        )}

        <div className=" w-full h-2 bg-gray-200 rounded-2xl mx-4 ">
          <div
            className="h-2 rounded-2xl bg-[#37c6ab] transition-all duration-300"
            style={{ width: `${resultValue}%` }}
          ></div>
        </div>

        <button
          onClick={clickHandler}
          className="flex items-center rounded-xl pl-4 pr-2 pt-2 pb-2 bg-[#2aad93] text-white text-sm cursor-pointer gap-2"
        >
          {stepCount == 4 ? "Create" : "Continue"}
          {stepCount == 4 ? (
            <Check size={"20px"} />
          ) : (
            <ChevronRight size={"18px"} />
          )}
        </button>
      </div>
    </>
  );
};

export default FormFooter;
