import React, { useCallback, useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import InputForm from "../InputForm";
import { auth } from "../../config/index";
import { AppContext } from "../../context/";
const SignIn = React.memo((props: any) => {
  const { dispatch } = useContext(AppContext);
  const [error, setError] = useState({ message: null });
 
  const signIn = useCallback((data: any) => {
    return auth
      .signInWithEmailAndPassword(data.username, data.password)
      .then((res: any) => {
        dispatch({ type: "UPDATE_DATA", value: true,data:res.email });
        //props.history.push("/dashboard");
      })
      .catch((error: any) => {
        setError(error);
      });
  }, []);
  return (
    <InputForm
      title="Sign In"
      redirect="/signup"
      message="Register Now"
      action={signIn}
      {...props}
      error={error && error.message}
    />
  );
});

export default withRouter(SignIn);
