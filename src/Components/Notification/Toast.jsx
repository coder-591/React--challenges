import LogoBG from "./LogoBG";
import { Bug, CircleCheck, Info, TriangleAlert, X } from "lucide-react";

const Toast = ({ text,counter }) => {
  return (
    <>
      <div
        className={` flex items-center justify-between text-black 
       shadow-sm w-100 h-20 rounded-2xl px-4 py-2 border border-borderColor transition-all duration-500
       ${text.type === "success" && "bg-linear-to-r from-green-300  to-transparent"}
       ${text.type === "error" && "bg-linear-to-r from-red-300  to-transparent"}
       ${text.type === "warning" && "bg-linear-to-r from-yellow-300  to-transparent"}
       ${text.type === "info" && "bg-linear-to-r from-gray-300  to-transparent"}
       `}
      >
        <div className="flex items-center gap-2">
          {text.type === "success" && (
            <LogoBG
              color={"bg-green-300 shadow-sm border border-green-600"}
              logo={<CircleCheck color="green" />}
            />
          )}

          {text.type === "error" && (
            <LogoBG
              color={"bg-red-300 shadow-sm border border-red-600"}
              logo={<Bug color="red" />}
            />
          )}
          {text.type === "warning" && (
            <LogoBG
              color={"bg-yellow-300 shadow-sm border border-yellow-600"}
              logo={<TriangleAlert color="yellow" />}
            />
          )}
          {text.type === "info" && (
            <LogoBG
              color={"bg-gray-300 shadow-sm border border-gray-600"}
              logo={<Info color="gray" />}
            />
          )}
          <p className="font-semibold text-sm text-black">{text.message}</p>
          {counter}
        </div>
        <X size={"20px"} />
      </div>
    </>
  );
};

export default Toast;
