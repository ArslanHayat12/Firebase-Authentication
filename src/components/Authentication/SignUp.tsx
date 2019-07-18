import React,{useCallback,useState} from "react";
import InputForm from "../InputForm";
import { auth } from "../../config/index";
const SignUp = (props: any) => {
  const [error, setError] = useState({ message: null });
  const action = useCallback((data: any) => {
    return auth
      .createUserWithEmailAndPassword(data.username, data.password)
      .then(() => {
        auth.signOut();
        props.history.push("/signin");
      })
      .catch((error: any) => {
        setError(error);
      });
  }, []);
  return (
    <InputForm
      title="Sign Up"
      redirect="/signin"
      message="Login Now"
      {...props}
      action={action}
      error={error.message}
    />
  );
};

export default SignUp;
