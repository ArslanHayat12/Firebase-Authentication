import React, { useCallback, useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import InputForm from "../InputForm";
import { auth, firebase } from "../../config/index";
import { AppContext } from "../../context/";
const SignIn = React.memo((props: any) => {
  const { dispatch } = useContext(AppContext);
  const [error, setError] = useState({ message: null });
  console.log(props.location.state);
  const signIn = useCallback((data: any) => {
    console.log(props.location.state.verificationId, data);
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

export default withRouter(SignIn);
