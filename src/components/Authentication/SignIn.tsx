import React, { useCallback } from "react";
import InputForm from "../InputForm";
import { auth } from "../../config/index";
import { useBeforeAuth } from "../../AuthProviders/BeforeAuth";
const SignIn = React.memo((props: any) => {
  const { signIn, error } = useBeforeAuth();
  const signInAction = useCallback((data: any) => {
    return signIn(
      auth.signInWithEmailAndPassword(data.username, data.password)
    );
  }, []);

  return (
    <InputForm
      title="Sign In"
      redirect="/signup"
      message="Register Now"
      action={signInAction}
      authType="/phone"
      authMessage="Signin through phone number"
      {...props}
      error={error && error.message}
    />
  );
});

export default SignIn;
