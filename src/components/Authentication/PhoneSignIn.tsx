import React, { useCallback, useState, Fragment } from "react";
import { withRouter } from "react-router-dom";
import InputForm from "../InputForm";
import { auth, firebase } from "../../config/index";
const SignIn = React.memo((props: any) => {
  const [error, setError] = useState({ message: null });

  const signIn = useCallback((data: any) => {
    const appVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible"
        // other options
      }
    );
    auth
      .signInWithPhoneNumber(data.phoneNumber, appVerifier)
      .then((res: any) => {
        props.history.push(`/code`,{verificationId:res.verificationId});
      })
      .catch((error: any) => {
        setError(error);
      });
  }, []);
  return (
    <Fragment>
      <div id="recaptcha-container" />
      <InputForm
        title="Sign In"
        redirect="/signup"
        message="Register Now"
        action={signIn}
        {...props}
        authType="/signin"
        authMessage="Signin through email and password"
        auth="phone"
        error={error && error.message}
      />
    </Fragment>
  );
});

export default withRouter(SignIn);
