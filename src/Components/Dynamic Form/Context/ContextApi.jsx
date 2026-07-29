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
  const [fieldsArr, setFieldsArr] = useState([]); // use for add the field in arr
  const [currField, setCurrField] = useState({}); // change the rigthsidebar UI according to which field is selected
  const [isFormActive, setIsFormActive] = useState(false); // to active the form preview
  // to show dynamic title on added fields
  const [titledOnTextField, setTitledOnTextField] = useState("Add title");
  const [titledOnCheckBoxField, setTitledOnCheckBoxField] =
    useState("Add title");
  const [titledOnDropDownField, setTitledOnDropDownField] =
    useState("Add title");
  // for required toggle
  const [isOn, setIsOn] = useState(false);

  // to add fields in form and middle bar UI
  function addField(f) {
    setFieldsArr((prev) => [...prev, f]);
    setIsActive(false);
  }
  console.log(fieldsArr);
  
  function currentField(f) {
    setCurrField(f);
  }

  function setTitleT(title) {
    setTitledOnTextField(title);
  }

  function setTitleC(title) {
    setTitledOnCheckBoxField(title);
  }

  function setTitleD(title) {
    setTitledOnDropDownField(title);
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
    setTitleT,
    setTitleC,
    setTitleD,
    titledOnTextField,
    isOn,
    toggleBtn,
    titledOnCheckBoxField,
    titledOnDropDownField
  };
  return (
    <StoreContext.Provider value={values}>{children}</StoreContext.Provider>
  );
};
