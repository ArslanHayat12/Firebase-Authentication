import React, {  useContext, Fragment } from "react";
import { AfterAuthContext } from "../context/";

const Users = (props:any) => {
  const {data} = useContext(AfterAuthContext);
  
  return (
    <Fragment>
      <h1>Here in User {JSON.stringify(data,null,3)}</h1>
      <button onClick={()=>props.history.push("/dashboard")}>Dashboard </button>
    </Fragment>
  );
};

export default Users;
