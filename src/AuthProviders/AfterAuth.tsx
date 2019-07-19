import React, { useReducer,useState, useContext } from "react";
import { reducerPrivate } from "../reducers/";
import { initialContent, AfterAuthContext } from "../context/";

const AfterAuth = ({ children, data, dispatchAction }: any) => {
  
  //
  //const [data, dispatchAction] = useState(initialContent);
  return (
      <AfterAuthContext.Provider value={{ data, dispatchAction }}>
        {children}
      </AfterAuthContext.Provider>
  );
};

export default AfterAuth;

export const useAfterAuth = () => useContext(AfterAuthContext);