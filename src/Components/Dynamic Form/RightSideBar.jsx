import { StickyNoteX } from "lucide-react";
import Header from "./Header";
import TextField from "./TextField";
import { textFields, checkBoxFields, dropDownFields } from "./assets";

const RightSideBar = () => {
  return (
    <>
      <div className="px-5 pt-5">
        <Header
          heading={"Field Properties"}
          textPara={"Select a field to edit"}
        />

        <div className="flex flex-col justify-center py-35 items-center gap-4">
          <span className="bg-cardColor border border-borderColor w-13 h-13 flex items-center justify-center rounded-lg">
            <StickyNoteX size={"27px"} />
          </span>
          <p className="text-center text-sm font-medium text-bodyTextColor">
            No field selected
          </p>
        </div>

        {/* <TextField arr={textFields} /> */}
      </div>
    </>
  );
};

export default RightSideBar;
