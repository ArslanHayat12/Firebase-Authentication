import React, { useContext, useCallback } from "react";
import { AfterAuthContext } from "../context/";
import { useBeforeAuth } from "./BeforeAuth";

const AfterAuth = ({ children, data, dispatchAction }: any) => {
  const { dispatch,content } = useBeforeAuth();
  const logout = useCallback(() => {
    dispatch({ type: "UPDATE_DATA",  isSignedIn: false, });
  }, []);

  return (
    <AfterAuthContext.Provider value={{ data, content, dispatchAction, logout }}>
      {children}
    </AfterAuthContext.Provider>
  );
};

export default AfterAuth;

export const useAfterAuth = () => useContext(AfterAuthContext);
