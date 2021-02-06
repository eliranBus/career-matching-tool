import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  let [index, setIndex] = useState(1);
  let [circularPrecentage, setCircularPrecentage] = useState(10);


  return (
    <Context.Provider
      value={{
        index,
        setIndex,
        circularPrecentage,
        setCircularPrecentage,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
