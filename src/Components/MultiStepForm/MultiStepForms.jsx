import React from "react";
import FormHeader from "./FormHeader";
import FormMain from "./FormMain";
import FormFooter from "./FormFooter";

const MultiStepForms = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="relative bg-white w-[35%] h-130 rounded-2xl mt-10">
          <FormHeader />
          <hr className="border-[#e5e7eb] mt-4" />
          <FormMain />
          <hr className="border-[#e5e7eb] mt-6 mb-4" />
           <FormFooter/>
        </div>
         

      </div>
    </>
  );
};

export default MultiStepForms;
