import React from "react";

const FormHeader = () => {
  return (
    <>
      {/* progress bar */}
      <div className="absolute w-full h-3 bg-gray-200 rounded-t-2xl">
        <div className="bg-[#32bca2] w-[33%] h-full rounded-t-2xl "></div>
      </div>
      {/* steps and its text */}
      <div className=" mt-8 px-6 flex items-center justify-between">
        <div className="flex items-center justify-start gap-1">
          <span className="bg-[#f9fafb] w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#9ca3af] text-[#9ca3af]">
            1
          </span>

          <hr className="border-[#e5e7eb] w-6 outline-0 rounded-2xl" />
          <span className=" bg-[#f9fafb] w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#9ca3af] text-[#9ca3af]">
            2
          </span>
          <hr className=" border-[#e5e7eb] w-6 outline-0 rounded-2xl" />
          <span className=" bg-[#f9fafb] w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#9ca3af] text-[#9ca3af]">
            3
          </span>
          <hr className=" border-[#e5e7eb] w-6 outline-0 rounded-2xl" />
          <span className=" bg-[#f9fafb] w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#9ca3af] text-[#9ca3af]">
            4
          </span>
        </div>

        <p className="text-[#9ca3af] font-medium text-[12px] pr-4">
          STEP 1 OF 4
        </p>
      </div>
      {/* header text */}
      <div className="flex flex-col mt-5 px-6 gap-3">
        <h1 className="font-medium text-xl">Create your Account</h1>
        <p className="text-[#9ca3af] font-md text-sm">
          Start with your basic info to get set up.
        </p>
      </div>
    </>
  );
};

export default FormHeader;
