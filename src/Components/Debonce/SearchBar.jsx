import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const SearchBar = ({ setValue }) => {
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    console.log("Effect run");
    const interval = setTimeout(() => {
      // we can fetch directly here with searchItem but react concept says make as many Component you can
      setValue(searchItem);
    }, 500);

    // if (searchItem === "") {
    //   setValue("");
    // }

    return () => clearTimeout(interval);
  }, [searchItem]);

  return (
    <div className="searchbar">
      <input
        value={searchItem}
        type="text"
        className="input"
        onChange={(e) => setSearchItem(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
