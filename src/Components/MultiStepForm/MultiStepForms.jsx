import FormHeader from "./FormHeader";
import FormMain from "./FormMain";
import FormFooter from "./FormFooter";
import { useState } from "react";

const MultiStepForms = () => {
  const [stepCount, setStepCount] = useState(1);
  let resultValue = Math.floor((stepCount / 4) * 100);

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="relative bg-white w-[35%] h-130 rounded-2xl mt-10">
          <FormHeader stepCount={stepCount} />
          <hr className="border-[#e5e7eb] mt-4" />
          <FormMain stepCount = {stepCount} />
          <hr className="border-[#e5e7eb] mt-6 mb-4" />
          <FormFooter
            resultValue={resultValue}
            stepCount={stepCount}
            setStepCount={setStepCount}
          />
        </div>
      </div>
    </>
  );
};

export default MultiStepForms;
