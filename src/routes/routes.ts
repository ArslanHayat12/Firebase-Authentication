import SignIn from "./../components/Authentication/SignIn";
import SignUp from "./../components/Authentication/SignUp";
import PhoneSignIn from "./../components/Authentication/PhoneSignIn";
import CodeVerification from "./../components/Authentication/CodeVerification";
import Dashboard from "./../components/Dashboard";
import Quotes from "../components/Quotes";
import NotFound from "../components/Errors/NotFound";
import PermissionDenied from "../components/Errors/PermissionDenied";
import Test from "../components/Test";

export const routesList = [
  {
    path: "/",
    component: SignIn
  },
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
  },
  {
    path: "/quotes",
    component: Quotes,
    private: true
  },
  {
    path: "/notfound",
    component: NotFound
  },
  {
    path: "/forbidden",
    component: PermissionDenied
  }
];
export const defaultRoute= {
  failurePath: "/signin",
  successPath:"/dashboard",
  notFoundPath:"/notfound",
  permissionDeniedPath:"/forbidden",
};



