import React, {  useContext, Fragment } from "react";
import { useAfterAuth } from "../AuthProviders/AfterAuth";

const Quotes = (props:any) => {
  const {data} = useAfterAuth();
  return (
    <Fragment>
      <h1>{JSON.stringify(data.data,null,3)}</h1>
      <button onClick={()=>props.history.push("/dashboard")}>Dashboard </button>
    </Fragment>
  );
};

export default Quotes;
