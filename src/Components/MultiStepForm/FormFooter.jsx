import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const FormFooter = ({ setStepCount }) => {
  return (
    <>
      <div className="flex items-center justify-between px-6">
        <button
        onClick={() => setStepCount((c) => Math.max(c - 1, 1))}
        className="flex items-center  rounded-xl border border-[#e5e7eb] pl-2 pr-4 pt-2 pb-2 text-sm cursor-pointer ">
          <ChevronLeft size={"18px"} />
          Back
        </button>

        <div className=" w-full h-2 bg-gray-200 rounded-2xl mx-4 "></div>

        <button
          onClick={() => setStepCount((c) => Math.min(c + 1, 4))}
          className="flex items-center rounded-xl pl-4 pr-2 pt-2 pb-2 bg-[#2aad93] text-white text-sm cursor-pointer"
        >
          Continue
          <ChevronRight size={"18px"} />
        </button>
      </div>
    </>
  );
};

export default FormFooter;
