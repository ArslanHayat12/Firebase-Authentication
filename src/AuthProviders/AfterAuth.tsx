import React, { useContext } from "react";
import { AfterAuthContext } from "../context/";
import { useBeforeAuth } from "./BeforeAuth";

const AfterAuth = ({ children, data, dispatchAction }: any) => {
  const {content } = useBeforeAuth();
 

  return (
    <AfterAuthContext.Provider value={{ data, content, dispatchAction }}>
      {children}
    </AfterAuthContext.Provider>
  );
};

export default AfterAuth;

export const useAfterAuth = () => useContext(AfterAuthContext);
