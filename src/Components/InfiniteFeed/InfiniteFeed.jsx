import React, { useState } from "react";
import { useEffect } from "react";

const InfiniteFeed = () => {
  const [feedData, setFeedData] = useState([]);
  const [cursor, setCursor] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        setCursor(data.info.next);
        setFeedData(data.results);
      });
  }, []);

    // console.log(cursor);


    const scrollHandler = (e)=>{
        console.log(e);
    }

  return (
    <div onScroll={scrollHandler}  className="feed w-[50%] h-screen mx-60 overflow-scroll mt-10">
      {feedData?.map((character, idx) => (
        <ul  key={idx} className="flex items-center justify-center flex-col gap-4  ">
          <img src={character.image} alt="pic" className="rounded-4xl" />
          <div className="flex items-center gap-5 mb-15">
            <li>{character.name}</li>
            <li>{character.gender}</li>
            <li>{character.status}</li>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default InfiniteFeed;
