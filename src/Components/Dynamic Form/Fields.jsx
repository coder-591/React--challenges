import { ALargeSmall, SquareCheck, SquareChevronDown } from "lucide-react";

const Fields = () => {
  const toolBox = [
    {
      id: 1,
      icon: <ALargeSmall size={"25px"} />,
      heading: "Text Field",
      desc: "Single line text input",
    },
    {
      id: 2,
      icon: <SquareCheck size={"25px"} />,
      heading: "Check Box",
      desc: "Allow multiple selections",
    },
    {
      id: 3,
      icon: <SquareChevronDown size={"25px"} />,
      heading: "Drop Down",
      desc: "Select from Options",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-4 mb-4 ">
        {toolBox.map((tool) => (
          <div
            key={tool.id}
            className="bg-cardColor border border-borderColor shadow-sm flex items-center justify-start gap-4 px-4 py-4 cursor-pointer rounded-xl hover:border-borderActiveColor hover:-translate-y-1 transition-all"
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
