import { CircleCheck } from "lucide-react";
import { useEffect, useState } from "react";

const FormHeader = ({ stepCount }) => {
  const [isActive, setIsActive] = useState(false);
  const steps = [1, 2, 3, 4];
  const stepHeading = [
    "Create your account",
    "Company details",
    "Choose a plan",
    "Preferences",
  ];
  const stepPara = [
    "Start with your basic info to get set up.",
    "Tell us a bit about where you work.",
    "Pick the plan that fits your team.",
    "Customize your experience.",
  ];

  return (
    <>
      {/* Content inside of the container */}

      <div className=" mt-6 px-6 flex items-center justify-between">
        <div className="flex items-center justify-start gap-1">
          {steps.map((num, idx) => (
            <div key={idx} className="flex items-center justify-start gap-1">
              <span // 3
                className={`${num == stepCount ? "bg-[#37c6ab] border-[#37c6ab] text-white" : stepCount > num ? "border-[#37c6ab]" : "bg-[#f9fafb] border-[#9ca3af] text-[#9ca3af]"}  w-8 h-8 flex items-center justify-center rounded-full border-2 transition-all duration-300 `}
              >
                {stepCount > num ? (
                  <CircleCheck color="#37c6ab" size={"18px"} />
                ) : (
                  num
                )}
              </span>

              {idx !== steps.length - 1 && (
                <hr
                  className={` w-6 outline-0 rounded-2xl ${stepCount > num ? "border-[#37c6ab]" : "border-[#e5e7eb]"}`}
                />
              )}
            </div>
          ))}
        </div>

        <p className="text-[#9ca3af] font-medium text-[12px] pr-4">
          STEP {stepCount} OF 4
        </p>
      </div>
      {/* header text */}
      <div className="flex flex-col mt-5 px-6 gap-1">
        <div>
          {stepHeading.map((heading, idx) => (
            <h1 key={idx} className="font-medium text-xl">
              {stepCount == idx + 1 && heading}
            </h1>
          ))}
        </div>
        <div>
          {stepPara.map((para, idx) => (
            <p key={idx} className="text-[#9ca3af] font-md text-sm">
              {stepCount == idx + 1 && para}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default FormHeader;
