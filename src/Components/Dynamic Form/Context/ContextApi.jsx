import { createContext, useEffect, useState } from "react";
import {
  ALargeSmall,
  LogOut,
  SquareCheck,
  SquareChevronDown,
} from "lucide-react";
import { idGenerator } from "../assets";

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
  const [titledOnField, setTitledOnField] = useState({});
  const [placeHolderOnField, setPlaceHolderOnField] = useState({});
  const [requiredOnField, setRequiredOnField] = useState({});

  // for required toggle
  const [isOn, setIsOn] = useState(false);

  // theme toggle

  const [isMode, setIsMode] = useState(
    localStorage.getItem("theme") || "light",
  );
  const [isthemeActive, setIsThemeActive] = useState(false);

  useEffect(() => {
    if (currField.id) {
      setRequiredOnField((prev) => ({ ...prev, [currField.id]: isOn }));
    }
  }, [isOn]);

  useEffect(() => {
    const mode = isMode;
    if (mode === "dark") {
      setIsThemeActive(true);
    }
    localStorage.setItem("theme", mode);
  }, [isMode]);

  // to add fields in form and middle bar UI
  function addField(f) {
    // const newObj = { ...f, id: idGenerator()}
    setFieldsArr((prev) => [...prev, { ...f, id: idGenerator() }]); // more to understand
    setIsActive(false);
  }

  function currentField(f) {
    setCurrField(f);
  }
  // set title for indivual fields

  function setTitle(title) {
    setTitledOnField((prev) => ({ ...prev, [currField.id]: title }));
  }

  function setPlaceHolder(placeHolder) {
    setPlaceHolderOnField((prev) => ({ ...prev, [currField.id]: placeHolder }));
  }

  function toggleTheme() {
    setIsThemeActive((prev) => !prev);
    setIsMode((prev) => (prev === "light" ? "dark" : "light"));
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
    titledOnField,
    placeHolderOnField,
    isOn,
    toggleBtn,
    setPlaceHolder,
    requiredOnField,
    toggleTheme,
    isthemeActive,
    isMode,
  };
  return (
    <StoreContext.Provider value={values}>{children}</StoreContext.Provider>
  );
};
