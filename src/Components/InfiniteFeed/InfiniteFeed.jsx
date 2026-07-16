import { useState, useEffect } from "react";

const InfiniteFeed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedData, setFeedData] = useState({});
  const [cursor, setCursor] = useState(
    "https://rickandmortyapi.com/api/character",
  );

  useEffect(() => {
    fetch(cursor)
      .then((res) => res.json())
      .then((data) => {
        setFeedData(data);
        setIsLoading(false);
      });
  }, [cursor]);

  // console.log(feedData);

  const scrollHandler = (e) => {
    const windowTop = e.target.scrollTop;
    const visibleArea = e.target.clientHeight;
    const allContentSize = e.target.scrollHeight;

    if (windowTop + visibleArea >= allContentSize) {
      setIsLoading(true);
      setCursor(feedData.info.next);
    }
  };

  return (
    <div
      onScroll={scrollHandler}
      className="feed w-[50%] h-screen mx-60 overflow-scroll mt-10"
    >
      {feedData?.results?.map((character, idx) => (
        <ul
          key={idx}
          className="flex items-center justify-center flex-col gap-4  "
        >
          <img src={character.image} alt="pic" className="rounded-4xl" />
          <div className="flex items-center gap-5 mb-15">
            <li>{character.name}</li>
            <li>{character.gender}</li>
            <li>{character.status}</li>
          </div>
        </ul>
      ))}

      {isLoading && "LoadingData..."}
    </div>
  );
};

export default InfiniteFeed;
