import React, { useCallback, useContext, useState } from "react";
import InputForm from "../InputForm";
import { auth } from "../../config/index";
import { BeforeAuthContext } from "../../context/";
const SignIn = React.memo((props: any) => {
  const { dispatch } = useContext(BeforeAuthContext);
  const [error, setError] = useState({ message: null });
 
  const signIn = useCallback((data: any) => {
    return auth
      .signInWithEmailAndPassword(data.username, data.password)
      .then((res: any) => {
        dispatch({ type: "UPDATE_DATA", value: true,data:res.user && res.user.email });
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
      authType="/phone"
      authMessage="Signin through phone number"
      {...props}
      error={error && error.message}
    />
  );
});

export default SignIn;
