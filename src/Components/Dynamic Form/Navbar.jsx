import { Eye, Layers, Pencil, Redo2, Save, Undo2 } from "lucide-react";
import Button from "./Button";
import { useContext } from "react";
import { StoreContext } from "./Context/ContextApi";
const Navbar = () => {
  const { isFormActive, setIsFormActive, toggleTheme, isthemeActive } =
    useContext(StoreContext);
  return (
    <>
      <div className="flex items-center justify-between px-4 bg-cardColor mx-2 h-17 rounded-2xl shadow-sm border-0 dark:border border-borderColor transition-colors duration-300">
        <div className="flex items-center justify-center gap-5 cursor-pointer">
          <div className="w-10 h-10 flex items-center justify-center bg-purpleColor rounded-lg ">
            <Layers className="text-white" />
          </div>
          <p className="font-semibold text-lg text-headingTextColor">Form Builder</p>
        </div>

        <div className="flex items-center gap-4 pl-20">
          <p className="font-semibold text-md text-headingTextColor">
            Untitled Form
          </p>
          <Pencil
            size={"18px"}
            className="text-iconColor hover:-translate-y-1 transition-all"
          />
        </div>

        <div className="flex items-center justify-center gap-3">
          <label className="flex items-center justify-start gap-1 cursor-pointer">
            <div className="flex items-center gap-2 ">
              <div
                onClick={toggleTheme}
                className={`w-12 h-7 rounded-2xl mx-2 border border-borderColor flex items-center justify-start px-0.5 cursor-pointer ${isthemeActive ? "bg-hoverColor" : "bg-borderColor"} transition-all duration-300  `}
              >
                <div
                  className={`bg-cardColor w-6 h-6 rounded-full border border-borderColor ${isthemeActive && "translate-x-4.5"} transition-all duration-300 `}
                />
              </div>
            </div>
          </label>

          {isFormActive ? (
            <Button
              text={"Hide Form"}
              icon={<Eye size={"20px"} />}
              bgcolor={"bg-btnBgColor"}
              border={
                "border border-borderColor hover:border-borderActiveColor"
              }
              setterFunc={setIsFormActive}
            />
          ) : (
            <Button
              text={"Preview Form"}
              icon={<Eye size={"20px"} />}
              bgcolor={"bg-btnBgColor"}
              border={
                "border border-borderColor hover:border-borderActiveColor"
              }
              setterFunc={setIsFormActive}
            />
          )}

          <Button
            text={"Save Form"}
            icon={<Save size={"20px"} className="text-white" />}
            bgcolor={"bg-btnBgPurpleColor"}
            textColor={"text-btnPurpleTextColor"}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
