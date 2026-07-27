import { createContext, useState } from "react";

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
    const [isActive,setIsActive] = useState(false)




  const values = {
    isActive,
    setIsActive
};
  return (
    <StoreContext.Provider value={values}>{children}</StoreContext.Provider>
  );
};
