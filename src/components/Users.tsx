import React, { useCallback, useContext, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { AppContext2 } from "../context/";

const Users = (props:any) => {
  const {data} = useContext(AppContext2);
  
  return (
    <Fragment>
      <h1>Here in User {JSON.stringify(data,null,3)}</h1>
      <button onClick={()=>props.history.push("/dashboard")}>Dashboard </button>
    </Fragment>
  );
};

export default withRouter(Users);
