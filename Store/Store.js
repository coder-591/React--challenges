import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Slices/Cart";

export const store = configureStore({
  reducer: cartReducer,
});
