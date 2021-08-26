import React, { createContext, useState, useCallback } from "react";

const Context = createContext();
export default Context;

export const ContextProvider = ({ children }) => {
  const intialState = {
    price: "",
    time: "Immediately within a month",
    bodyPart: "",
    concerns: [],
    about: {},
  };

  const [details, setDetails] = useState(intialState);

  const addDetails = useCallback(
    function (data, key) {
      setDetails((prevData) => ({ ...prevData, [key]: data }));
    },
    [setDetails]
  );

  return (
    <Context.Provider value={{ details, addDetails }}>
      {children}
    </Context.Provider>
  );
};
