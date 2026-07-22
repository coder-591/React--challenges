import React, { useEffect, useState } from "react";
import {
  stepOneHolder,
  stepOneInput,
  stepTwoHolder,
  stepTwoInput,
} from "./Utils";

const FormMain = ({ stepCount }) => {
  const [dynamicInputs, setDynamicInputs] = useState([]);
  const [dynamicPlaceHolder, setDynamicPlaceHolder] = useState([]);

  useEffect(() => {
    if (stepCount == 1) {
      setDynamicInputs(stepOneInput);
      setDynamicPlaceHolder(stepOneHolder);
    }
    if (stepCount == 2) {
      setDynamicInputs(stepTwoInput);
      setDynamicPlaceHolder(stepTwoHolder);
    }
  }, [stepCount]);

  return (
    <>
      <div className="flex flex-col ">
        <div className="flex items-center px-6 mt-6 gap-5">
          <label className="flex flex-col items-start gap-1">
            <h3 className=" text-[#374151] font-semibold text-sm pl-2">
              {dynamicInputs[0]}
            </h3>

            <input
              type="text"
              placeholder={dynamicPlaceHolder[0]}
              className="border outline-0 border-[#e5e7eb] pl-3 p-2 rounded-xl text-sm shadow-md focus:border-[#37c6ab]  focus:shadow-[#37c6ab]"
            />
          </label>

          <label className="flex flex-col items-start gap-1">
            <h3 className=" text-[#374151] font-semibold text-sm pl-2">
              {dynamicInputs[1]}
            </h3>
            <input
              type="text"
              placeholder={dynamicPlaceHolder[1]}
              className="border outline-0 border-[#e5e7eb] pl-3 p-2 rounded-xl text-sm shadow-md focus:border-[#37c6ab]  focus:shadow-[#37c6ab]"
            />
          </label>
        </div>

        <div className="flex flex-col items-start px-6 mt-6 gap-5">
          <label className="flex flex-col items-start gap-1">
            <h3 className=" text-[#374151] font-semibold text-sm pl-2">
              {dynamicInputs[2]}
            </h3>
            <input
              type="email"
              placeholder={dynamicPlaceHolder[2]}
              className="border outline-0 border-[#e5e7eb] pl-3 p-2 rounded-xl text-sm w-104 shadow-md focus:border-[#37c6ab]  focus:shadow-[#37c6ab]"
            />
          </label>
          <label className="flex flex-col items-start gap-1">
            <h3 className=" text-[#374151] font-semibold text-sm pl-2">
              {dynamicInputs[3]}
            </h3>
            <input
              type="password"
              placeholder={dynamicPlaceHolder[3]}
              className="border outline-0 border-[#e5e7eb] pl-3 p-2 rounded-xl text-sm w-104 shadow-md focus:border-[#37c6ab]  focus:shadow-[#37c6ab]"
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default FormMain;
