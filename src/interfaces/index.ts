import { RouteProps } from "react-router-dom";
import { defaultRoutesTypes, routesType, headerFooterType } from "../types/";
export interface RoutesPropsInterface extends RouteProps {
  routesList: routesType[];
  isSignedIn?: boolean;
  defaultRoute?: defaultRoutesTypes;
  initialContent: any;
  reducerPrivate: any;
  onLoad?: (callback: any) => void;
  headerFooterType?: headerFooterType;
  showHeaderAfterAuth?: (data?: any) => void;
  showFooterAfterAuth?: () => void;
  wrappContent: React.ComponentClass<BasicProps, any> | string;
  wrappLayout: React.ComponentClass<BasicProps, any> | string;
  wrappLayoutClass?: string;
  wrappContentClass?: string;
}
export interface BasicProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  hasSider?: boolean;
  className?: string | undefined;
}
