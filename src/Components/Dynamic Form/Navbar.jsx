import { Eye, Layers, Pencil, Redo2, Save, Undo2 } from "lucide-react";
const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-4 bg-cardColor mx-2 mt-3 h-17 rounded-2xl shadow-sm">
        <div className="flex items-center justify-center gap-5 cursor-pointer">
          <div className="w-10 h-10 flex items-center justify-center bg-purpleColor rounded-lg ">
            <Layers color="white" />
          </div>
          <p className="font-semibold text-lg">Form Builder</p>
        </div>

        <div className="flex items-center gap-4 pl-20">
          <p className="font-semibold text-md text-headingTextColor">
            Untitled Form
          </p>
          <Pencil
            color="#4b5563"
            size={"18px"}
            className="hover:-translate-y-1 transition-all"
          />
        </div>

        <div className="flex items-center justify-center gap-3">
          <label className="flex items-center justify-start gap-1 cursor-pointer">
            <Undo2 color="#4b5563" />
            <Redo2 color="#4b5563" />
          </label>

          <button className="flex items-center gap-4 px-4 py-3 rounded-xl bg-cardColor shadow-sm cursor-pointer hover:-translate-y-1 transition-all   ">
            <Eye size={"20px"} />
            <p className="font-medium text-sm">Preveiw Form</p>
          </button>

          <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-purpleColor shadow-sm cursor-pointer hover:-translate-y-1 transition-all">
            <Save size={"20px"} color="#fff" />
            <p className="font-medium text-sm text-btnTextColor">Save Form</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
