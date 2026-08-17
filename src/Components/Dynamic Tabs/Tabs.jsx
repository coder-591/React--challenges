import { Plus, X } from "lucide-react";
import React, { useState } from "react";
import { idGenerator } from "../../assets";

const Tabs = () => {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const [tabCount, setTabCount] = useState(0);

  const addTabs = () => {
    const newTab = {
      id: idGenerator(),
      text: "new Tab",
    };
    setTabs((prev) => [...prev, newTab]);
    setActiveTab(newTab.id);
    setTabCount((prev) => prev + 1);
  };

  const clickHandler = (id) => {
    setActiveTab(id);
  };

  const removeTabs = (id) => {
    setTabs((prev) => {
      return prev.filter((tab) => tab.id !== id);
    });
    setTabCount((prev) => prev - 1);
    setActiveTab((prev) => (prev = tabs[tabs.length - 1 - 1]?.id));
  };

  console.log("Active tab id : ", activeTab);

  return (
    <div className="px-4 flex flex-col gap-9">
      <div className="mt-4 flex items-center justify-between border px-4 py-3 rounded-2xl border-borderColor">
        <div className="max-w-250 flex items-center gap-2 overflow-x-scroll scrollbar-none">
          {tabs.length === 0 ? (
            <p
              className={`font-semibold text-sm capitalize text-bodyTextColor`}
            >
              No tabs added yet
            </p>
          ) : (
            tabs?.map((tab) => (
              <div
                key={tab.id}
                className={`cursor-pointer shrink-0 w-30  ${activeTab === tab.id ? "border-purpleColor border-2" : "border border-borderColor"} flex items-center justify-center gap-4 py-3 rounded-full`}
              >
                <div onClick={() => clickHandler(tab.id)}>
                  <p
                    className={`font-semibold text-sm capitalize ${activeTab === tab.id && "text-purpleColor "}`}
                  >
                    {tab.text}
                  </p>
                </div>
                <X
                  onClick={() => removeTabs(tab.id)}
                  size={"20px"}
                  className="cursor-pointer text"
                />
              </div>
            ))
          )}
        </div>

        <button
          onClick={addTabs}
          className="px-3 cursor-pointer border-2 border-purpleColor bg-lightPurpleColor flex items-center gap-2 py-3 rounded-2xl "
        >
          <Plus color="#5b4ae8" size={"20px"} />
          <p className="font-semibold text-sm text-purpleColor capitalize">
            new Tab
          </p>
        </button>
      </div>

      <div className="border h-60 rounded-2xl ">Show the tab name</div>
      <div className="border border-borderColor rounded-full px-6 py-3 flex items-center justify-between">
        <p> {tabCount} tabs opens</p>
        <p>Tip: Close the active tab and see the smart activation</p>
      </div>
    </div>
  );
};

export default Tabs;
