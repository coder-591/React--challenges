import { StickyNoteX } from "lucide-react";
import Header from "./Header";
import TextField from "./TextField";
import { useContext } from "react";
import { StoreContext } from "./Context/ContextApi";
import CheckBoxField from "./CheckBoxField";
import DropDownField from "./DropDownField";

const RightSideBar = () => {
  const { fieldsArr, currField } = useContext(StoreContext);
  return (
    <>
      <div className="px-5 pt-5">
        {fieldsArr.length > 0 ? (
          <Header
            heading={"Field Properties"}
            textPara={"Edit the selected field type"}
          />
        ) : (
          <Header
            heading={"Field Properties"}
            textPara={"Select a field to edit"}
          />
        )}

        {fieldsArr.length == 0 && (
          <div className="flex flex-col justify-center py-35 items-center gap-4">
            <span className="bg-cardColor border border-borderColor w-13 h-13 flex items-center justify-center rounded-lg">
              <StickyNoteX size={"27px"} />
            </span>
            <p className="text-center text-sm font-medium text-bodyTextColor">
              No field selected
            </p>
          </div>
        )}

        {fieldsArr.map((f) => (
          <div key={f.id}>
            {currField.heading === "Text Field" && currField.id === f.id && (
              <TextField id={f.id} />
            )}

            {currField.heading === "Check Box" && currField.id === f.id && (
              <CheckBoxField id={f.id} />
            )}

            {currField.heading === "Drop Down" && currField.id === f.id && (
              <DropDownField id={f.id} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default RightSideBar;
