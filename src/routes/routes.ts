import SignIn from "./../components/Authentication/SignIn";
import SignUp from "./../components/Authentication/SignUp";
import PhoneSignIn from "./../components/Authentication/PhoneSignIn";
import CodeVerification from "./../components/Authentication/CodeVerification";
import Dashboard from "./../components/Dashboard";

export const routesList = [
  {
    path: "/signin",
    component: SignIn
  },
  {
    path: "/phone",
    component: PhoneSignIn
  },
  {
    path: "/code",
    component: CodeVerification
  },
  {
    path: "/signup",
    component: SignUp
  },
  {
    path: "/dashboard",
    component: Dashboard,
    private: true
  }
];
export const defaultRoute= {
  failurePath: "/signin",
  successPath:"/dashboard"
};

