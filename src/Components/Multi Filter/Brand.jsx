import { useState } from "react";
import { brands, highToLow, lowToHigh } from "./items";
import { products } from "./items";
import { categories } from "./items";

const Brand = ({ itemName }) => {
  const [searchItem, setSearchItem] = useState("");

  const searchHandler = (e) => {
    setSearchItem(e.target.innerText);
  };

  return (
    <>
      <ul className="flex items-center justify-center gap-4 mt-6">
        {itemName === "Brand" &&
          brands.map((item, idx) => (
            <li
              onClick={searchHandler}
              key={idx}
              className="font-bold cursor-pointer border px-6 py-3 rounded-full "
            >
              {item}
            </li>
          ))}

        {itemName === "Category" &&
          categories.map((item, idx) => (
            <li
              onClick={searchHandler}
              key={idx}
              className="font-bold cursor-pointer border px-6 py-3 rounded-full"
            >
              {item}
            </li>
          ))}

        {itemName === "Prices" && (
          <ul className="flex items-center justify-center gap-4">
            <li
              onClick={searchHandler}
              className="font-bold cursor-pointer border px-6 py-3 rounded-full"
            >
              Low to High
            </li>
            <li
              onClick={searchHandler}
              className="font-bold cursor-pointer border px-6 py-3 rounded-full"
            >
              High to Low
            </li>
          </ul>
        )}

        {itemName === "Rating" && (
          <ul className="flex items-center justify-center gap-4">
            <li
              onClick={searchHandler}
              className="font-bold cursor-pointer border px-6 py-3 rounded-full"
            >
              1
            </li>
            <li
              onClick={searchHandler}
              className="font-bold cursor-pointer border px-6 py-3 rounded-full"
            >
              2
            </li>
            <li
              onClick={searchHandler}
              className="font-bold cursor-pointer border px-6 py-3 rounded-full"
            >
              3
            </li>
            <li
              onClick={searchHandler}
              className="font-bold cursor-pointer border px-6 py-3 rounded-full"
            >
              4
            </li>
            <li
              onClick={searchHandler}
              className="font-bold cursor-pointer border px-6 py-3 rounded-full"
            >
              5
            </li>
          </ul>
        )}
      </ul>

      {searchItem && (
        <ul className="mt-10">
          {itemName === "Brand" &&
            products
              .filter((product) => product.Brand === searchItem)
              .map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-center gap-20"
                >
                  <p className="font-bold">{item.Category}</p>
                  <p className="font-bold">{item.Brand}</p>
                  <p className="font-bold">{item.Price}</p>
                  <p className="font-bold">{item.Rating}</p>
                </li>
              ))}

          {itemName === "Category" &&
            products
              .filter((product) => product.Category === searchItem)
              .map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-center gap-20"
                >
                  <p className="font-bold">{item.Category}</p>
                  <p className="font-bold">{item.Brand}</p>
                  <p className="font-bold">{item.Price}</p>
                  <p className="font-bold">{item.Rating}</p>
                </li>
              ))}

          {itemName === "Prices" &&
            (searchItem === "Low to High"
              ? lowToHigh.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-center gap-20"
                  >
                    <p className="font-bold">{item.Category}</p>
                    <p className="font-bold">{item.Brand}</p>
                    <p className="font-bold">{item.Price}</p>
                    <p className="font-bold">{item.Rating}</p>
                  </li>
                ))
              : highToLow.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-center gap-20"
                  >
                    <p className="font-bold">{item.Category}</p>
                    <p className="font-bold">{item.Brand}</p>
                    <p className="font-bold">{item.Price}</p>
                    <p className="font-bold">{item.Rating}</p>
                  </li>
                )))}

          {itemName === "Rating" &&
            products // => ?
              ?.filter((product) => product.Rating >= searchItem)
              .map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-center gap-20"
                >
                  <p className="font-bold">{item.Category}</p>
                  <p className="font-bold">{item.Brand}</p>
                  <p className="font-bold">{item.Price}</p>
                  <p className="font-bold">{item.Rating}</p>
                </li>
              ))}
        </ul>
      )}
    </>
  );
};

export default Brand;
// 0514851342
