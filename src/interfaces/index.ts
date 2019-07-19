import { RouteProps } from "react-router-dom";
export interface RoutesPropsInterface extends RouteProps {
  routesList?: any;
  isSignedIn?: boolean;
  defaultRoute?: any;
  initialContent?: any;
  reducerPrivate?: any;
}
