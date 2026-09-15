import { products } from "../Multi Filter/items";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../Slices/Cart";

const ShowItems = () => {
  // for UI
  const [counter, setCounter] = useState({});

  const dispatch = useDispatch();

  const counterHandler = (id, type, item) => {
    // const res = cartItems.find((t) => t.id == id);
    // console.log(res.quantity); //why its quantity is 1 instead of 0
    // for local cartItems Management

    // setCartItems((prev) => {
    //   return prev.map((item) => {
    // AI approach
    //     // if (item.id !== id) return item;

    //     // if (type === "increase") {
    //     //   return { ...item, quantity: item.quantity + 1 };
    //     // }

    //     // return { ...item, quantity: Math.max(item.quantity - 1, 0) };
    //  my method
    //     if (item.id == id) {
    //       if (type == "increase") {
    //         return { ...item, quantity: item.quantity + 1 };
    //       } else {
    //         return { ...item, quantity: Math.max(item.quantity - 1, 0) };
    //       }
    //     }

    //     return item;
    //   });
    // });

    if (type === "increase") {
      dispatch(addToCart(item));
      setCounter((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    } else {
      dispatch(removeFromCart(id))
      setCounter((prev) => ({ ...prev, [id]: Math.max(prev[id] - 1, 0) }));
    }
  };

  return (
    <>
      <div className="grid grid-cols-3 px-10 gap-10 mt-20">
        {products?.map((item, idx) => (
          <ul
            key={idx}
            className="border flex flex-col items-start px-10 py-10 rounded-2xl cursor-pointer"
          >
            <li>Category : {item.Category}</li>
            <li>Brand : {item.Brand}</li>
            <li>Price : {item.Price}</li>
            <li>Rating : {item.Rating}</li>

            <div className="flex items-center justify-center gap-4 mt-5 ">
              <span
                onClick={() => counterHandler(item.id)}
                className="border px-3 self-center rounded-full cursor-pointer"
              >
                -
              </span>
              {counter[item.id] ?? 0}
              <span
                onClick={() => counterHandler(item.id, "increase", item)}
                className="border px-3 self-center rounded-full cursor-pointer"
              >
                +
              </span>
            </div>
          </ul>
        ))}
      </div>
    </>
  );
};

export default ShowItems;
