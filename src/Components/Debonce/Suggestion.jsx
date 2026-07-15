import React, { useState } from "react";
import { useEffect } from "react";
import SearchBar from "./SearchBar";

const Suggestion = () => {
  // console.log("Component render");
  const [value, setValue] = useState("");
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    console.log(value);

    // fetch here
    if (value !== "") {
      fetch(`https://api.tvmaze.com/search/shows?q=${value}`)
        .then((res) => res.json())
        .then((data) => setFetchedData(data))
        .catch((error) => {
          console.log(error.message);
        });
    }else{
        setFetchedData([])
    }

   
      

  }, [value]);

  // console.log("Data", fetchedData); // => why it shows 4 times

  return (
    <div>
      <SearchBar setValue={setValue} />

      <div className="suggestionCon">
        {fetchedData?.map((item) => (
          <li className="list" key={item.show.id}>
            {item.show.name}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Suggestion;
