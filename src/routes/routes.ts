import SignIn from "./../components/Authentication/SignIn";
import SignUp from "./../components/Authentication/SignUp";
import Dashboard from "./../components/Dashboard";

export const routesList = [
  {
    path: "/signin",
    component: SignIn
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

