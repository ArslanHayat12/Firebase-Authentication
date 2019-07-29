import React, { useCallback } from "react";
import InputForm from "../InputForm";
import { auth, firebase } from "../../config/index";
import { useBeforeAuth } from "../../AuthProviders/BeforeAuth";
const SignIn = React.memo((props: any) => {
  const { error, signIn } = useBeforeAuth();

  const signInAction = useCallback((data: any) => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      props.location.state.verificationId,
      data.code
    );
    return signIn(auth.signInWithCredential(credential));
  }, []);
  
  return (
    <InputForm
      title="Sign In"
      redirect="/signup"
      message="Register Now"
      action={signInAction}
      {...props}
      authType="/signin"
      authMessage="Signin through email and password"
      auth="code"
      error={error && error.message}
    />
  );
});

export default SignIn;
