import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Slices/Cart";
import commentReducer from "../Slices/Comment";

export const store = configureStore({
  reducer: { cartReducer, commentReducer },
});
