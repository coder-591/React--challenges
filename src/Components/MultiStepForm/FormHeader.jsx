import { CircleCheck } from "lucide-react";
import { useEffect, useState } from "react";

const FormHeader = ({ stepCount }) => {
  const [isActive, setIsActive] = useState(false);
  const steps = [1, 2, 3, 4];

  return (
    <>
      {/* Content inside of the container */}

      <div className=" mt-6 px-6 flex items-center justify-between">
        <div className="flex items-center justify-start gap-1">
          {steps.map((num, index) => (
            <div className="flex items-center justify-start gap-1">
              <span
                className={`${num == stepCount ? "bg-[#37c6ab] border-[#37c6ab] text-white" : "bg-[#f9fafb] border-[#37c6ab] text-[#9ca3af]"}  w-8 h-8 flex items-center justify-center rounded-full border-2 `}
              >
                {stepCount > num ?<CircleCheck color="#37c6ab" size={"18px"} />: num}
              </span>

              {index !== steps.length - 1 && (
                <hr className={"border-[#e5e7eb] w-6 outline-0 rounded-2xl ${}" }/>
              )}
            </div>
          ))}
        </div>

        <p className="text-[#9ca3af] font-medium text-[12px] pr-4">
          STEP {stepCount} OF 4
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
