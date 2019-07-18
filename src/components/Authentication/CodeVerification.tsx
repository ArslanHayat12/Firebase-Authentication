import React, { useCallback, useContext, useState } from "react";
import InputForm from "../InputForm";
import { auth, firebase } from "../../config/index";
import { BeforeAuthContext } from "../../context/";
const SignIn = React.memo((props: any) => {
  const { dispatch } = useContext(BeforeAuthContext);
  const [error, setError] = useState({ message: null });
  const signIn = useCallback((data: any) => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      props.location.state.verificationId,
      data.code
    );

    return auth
      .signInWithCredential(credential)
      .then((res: any) => {
        dispatch({ type: "UPDATE_DATA", value: true,data:res.user && (res.user.email||res.user.phoneNumber) });
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
      authType="/signin"
      authMessage="Signin through email and password"
      auth="code"
      error={error && error.message}
    />
  );
});

export default SignIn;
