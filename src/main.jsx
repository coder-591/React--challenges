
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "../Store/Store.js";
// import { StoreProvider } from "./Components/Dynamic Form/Context/ContextApi.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  {/* // <StoreProvider> */}
    <App />
  {/* // </StoreProvider>, */}
  </Provider>,
);
