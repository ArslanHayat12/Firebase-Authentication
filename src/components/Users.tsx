import React, {  useContext, Fragment } from "react";
import { useAfterAuth } from "../AuthProviders/AfterAuth";

const Users = (props:any) => {
  const {data} = useAfterAuth();
  
  return (
    <Fragment>
      <h1>Here in User {JSON.stringify(data,null,3)}</h1>
      <button onClick={()=>props.history.push("/dashboard")}>Dashboard </button>
    </Fragment>
  );
};

export default Users;
