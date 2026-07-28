import { createContext, useState } from "react";
import {
  ALargeSmall,
  LogOut,
  SquareCheck,
  SquareChevronDown,
} from "lucide-react";

export const StoreContext = createContext(null);

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
  const [isActive, setIsActive] = useState(false); // to active the card
  const [fieldsArr, setFieldsArr] = useState([]);
  const [currField, setCurrField] = useState({});
  const [isFormActive, setIsFormActive] = useState(false);
  const [titledOnTextField, setTitledOnTextField] = useState("Add title");
  // for required toggle
  const [isOn, setIsOn] = useState(false);

  // to add fields in form and middle bar UI
  function addField(f) {
    setFieldsArr((prev) => [...prev, f]);
    setIsActive(false);
  }

  function currentField(f) {
    setCurrField(f);
  }

  function setTitle(title) {
    setTitledOnTextField(title);
  }
  function toggleBtn() {
    setIsOn((prev) => !prev);
  }

  const values = {
    isActive,
    setIsActive,
    addField,
    fieldsArr,
    toolBox,
    currentField,
    currField,
    isFormActive,
    setIsFormActive,
    setTitle,
    titledOnTextField,
    isOn,
    toggleBtn
  };
  return (
    <StoreContext.Provider value={values}>{children}</StoreContext.Provider>
  );
};
