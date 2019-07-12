import React, { useCallback, useContext, Fragment } from "react";
import { AppContext } from "../context/";
import { auth } from "../config/index";

const Dashboard = () => {
  const {content, dispatch } = useContext(AppContext);
  const logout = useCallback(() => {
    auth.signOut();
    dispatch({ type: "UPDATE_DATA", value: false });
  }, []);
  return (
    <Fragment>
      <h1>Here in Dashboard {JSON.stringify(content,null,3)}</h1>
      <button onClick={logout}>Logout </button>
    </Fragment>
  );
};

export default Dashboard;
