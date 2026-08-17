import { Folder } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center gap-4 px-4 pt-4">
      <Folder color="#5b4ae8" size={"50px"} />
      <div>
        <h1 className="font-bold text-black text-lg">Dynamic Tabs</h1>
        <p className="font-semibold text-sm text-bodyTextColor">
          Add,remove and manage your tabs dynamically
        </p>
      </div>
    </div>
  );
};

export default Navbar;
