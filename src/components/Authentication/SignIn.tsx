import React, { useCallback, useState } from "react";
import InputForm from "../InputForm";
import { auth } from "../../config/index";
import { useBeforeAuth } from "../../AuthProviders/BeforeAuth";
const SignIn = React.memo((props: any) => {
  
  const { dispatch } = useBeforeAuth();
  const [error, setError] = useState({ message: null });
  const signIn = useCallback((data: any) => {
    return auth
      .signInWithEmailAndPassword(data.username, data.password)
      .then((res: any) => {
        dispatch({
          type: "UPDATE_DATA",
          isSignedIn: true,
          data: res.user && res.user.email
        });
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
