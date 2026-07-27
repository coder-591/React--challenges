import { createContext, useState } from "react";
import { ALargeSmall, SquareCheck, SquareChevronDown } from "lucide-react";

export const StoreContext = createContext(null);
// const fieldsArr = [];
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

export const StoreProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [fieldsArr, setFieldsArr] = useState([]);

  function addField(f) {
    setFieldsArr((prev) => [...prev, f]);
    setIsActive(false);
  }
  console.log(fieldsArr);

  const values = {
    isActive,
    setIsActive,
    addField,
    fieldsArr,
    toolBox,
  };
  return (
    <StoreContext.Provider value={values}>{children}</StoreContext.Provider>
  );
};
