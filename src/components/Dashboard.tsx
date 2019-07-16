import React, { useCallback, useContext, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { AppContext,AppContext2 } from "../context/";
import { auth } from "../config/index";

const Dashboard = (props:any) => {
  const {content, dispatch } = useContext(AppContext);
  const {dispatchAction } = useContext(AppContext2);
  const logout = useCallback(() => {
    auth.signOut();
    dispatch({ type: "UPDATE_DATA", value: false });
  }, []);
  return (
    <Fragment>
      <h1>Here in Dashboard {JSON.stringify(content,null,3)}</h1>
      <button onClick={logout}>Logout </button>
      <button onClick={()=>{ dispatchAction({ type: "UPDATE_DATA", value: "I am here" });props.history.push("/users")}}>Users </button>
    </Fragment>
  );
};

export default withRouter(Dashboard);
