import { ChevronDown, X } from "lucide-react";
import { useEffect, useState } from "react";

const SingleAccordion = () => {
  const [quotes, setQuotes] = useState([]);
  const [isActiveId, setIsActiveId] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => setQuotes(data.quotes));
  }, []);

  const clickHandler = (id) => {
    setIsActiveId((prev) => {
      if (prev === id) {
        return null;
      }
      return id;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 cursor-pointer min-h-screen mt-10 mb-6">
      {quotes.map((quote) => (
        <div
          onClick={() => {
            clickHandler(quote.id);
          }}
          key={quote.id}
          className={`bg-cardColor w-[40%] ${isActiveId === quote.id ? "h-60" : "h-15"} rounded-2xl shadow-sm border border-borderColor px-6 flex justify-between transition-all duration-500`}
        >
          <div className="flex flex-col gap-1 justify-between mt-4 mb-4">
            <h1 className="font-semibold text-md">Quote # {quote.id}</h1>

            <p
              className={`font-semibold text-sm text-bodyTextColor w-100 ${isActiveId === quote.id ? "block" : "hidden"}  transition-all duration-700`}
            >
              {quote.quote}
            </p>

            <p
              className={`font-medium text-sm text-bodyTextColor ${isActiveId === quote.id ? "block" : "hidden"} transition-all duration-700`}
            >
              Author : {quote.author}
            </p>
          </div>

          {isActiveId === quote.id ? (
            <X size={"20px"} className="mt-4 transition-all duration-700" />
          ) : (
            <ChevronDown
              size={"20px"}
              className="mt-5 transition-all duration-700"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default SingleAccordion;
