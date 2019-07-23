import { RouteProps } from "react-router-dom";
import { functions } from "firebase";
export interface RoutesPropsInterface extends RouteProps {
  routesList: any;
  isSignedIn?: boolean;
  defaultRoute: any;
  initialContent: any;
  reducerPrivate: any;
  onLoad?: (callback: any) => void;
  headerType?:string;
  footerType?:string;
  showHeaderAfterAuth?: (data?:any) => void;
  showFooterAfterAuth?: () => void;
  wrappContent: React.ComponentClass<BasicProps, any> | string;
  wrappLayout: React.ComponentClass<BasicProps, any> | string;
  wrappLayoutClass?: string;
  wrappContentClass?: string;
}
export interface BasicProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  hasSider?: boolean;
  className?:string|undefined;
}
export interface RoutesPropsBeforeAuthInterface extends RoutesPropsInterface {
  wrappContent: React.ComponentClass<BasicProps, any> | string;
  wrappLayout: React.ComponentClass<BasicProps, any> | string;
  wrappLayoutClass?: string;
  wrappContentClass?: string;
 
}
