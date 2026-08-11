import { useState, useEffect } from "react";
import { faqs } from "./faqs";
import { Minus, Plus } from "lucide-react";

const FaqContainer = () => {
  const [faq, setFaq] = useState([]);
  const [activeId, setActiveId] = useState(0);
  const [searchItem, setSearchItem] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      if (searchItem == "") {
        setFaq([]);
        setCount(0);
      }
      const arr = faqs.filter((q) =>
        q.question
          .toLowerCase()
          .trim()
          .includes(searchItem?.toLowerCase().trim()),
      );

      if (searchItem !== "") {
        setFaq(arr);
        setCount(arr.length);
      }
    }, 500);

    return () => clearTimeout(interval);
  }, [searchItem]);

  const getId = (id) => {
    setActiveId((prev) => {
      if (prev === id) {
        return null;
      }
      return id;
    });
  };

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <div className="text-center mt-4 space-y-2">
          <h1 className="font-bold text-2xl uppercase">faq search</h1>
          <p className="text-bodyTextColor font-medium text-md">
            Find answer for your question quickly
          </p>
        </div>
        <input
          type="text"
          onChange={(e) => setSearchItem(e.target.value)}
          placeholder="Search FAQs..."
          className="border outline-0 px-6 py-3 w-110 rounded-xl border-borderColor text-sm bg-cardColor"
        />
      </div>

      <div className="flex flex-col mt-4 items-center gap-2">
        <p className="text-bodyTextColor font-medium text-sm">
          {count} {count === 1 ? "Question" : "Questions"}
        </p>
        <div className="flex flex-col gap-4 mb-4 cursor-pointer ">
          {faq?.map((q) => (
            <div
              onClick={() => {
                getId(q.id);
              }}
              key={q.id}
              className={`border outline-0 px-6 py-3 w-110 rounded-xl border-borderColor text-sm bg-cardColor ${activeId === q.id ? "h-40" : "h-12"} transition-all duration-600`}
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold text-md">{q.question}</p>

                {activeId === q.id ? (
                  <Minus size={"20px"} />
                ) : (
                  <Plus size={"20px"} />
                )}
              </div>
              <p
                className={`mt-4 pr-4 ${activeId === q.id ? "block" : "hidden"} transition-all duration-700`}
              >
                {q.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FaqContainer;
