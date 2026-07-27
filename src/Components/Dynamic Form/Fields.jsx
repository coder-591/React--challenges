import { useContext } from "react";
import { StoreContext } from "./Context/ContextApi";

const Fields = () => {
  const { addField, toolBox } = useContext(StoreContext);

  return (
    <>
      <div className="flex flex-col gap-4 mb-4 ">
        {toolBox.map((tool) => (
          <div
            onClick={() => addField(tool)}  
            key={tool.id}
            className=" border border-borderColor shadow-sm flex items-center justify-start gap-4 px-4 py-4 cursor-pointer rounded-xl hover:border-borderActiveColor hover:-translate-y-1 transition-all"
          >
            <span className="text-black">{tool.icon}</span>
            <span className="flex flex-col items-start">
              <h4 className="text-sm font-semibold text-headingTextColor">
                {tool.heading}
              </h4>
              <p className="text-[13px] font-medium text-bodyTextColor">
                {tool.desc}
              </p>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Fields;
