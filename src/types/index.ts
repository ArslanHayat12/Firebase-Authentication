export type BeforeAuthContextType = {
  content?: any;
  dispatch?: (data?: any) => void;
  isSignedIn?: boolean | undefined;
  data?: any;
  logout?: any;
  signIn?: any;
  error?: any;
};

export type AfterAuthContextType = BeforeAuthContextType & {
  dispatchAction?:any;
};

export type defaultRoutesTypes = {
  failurePath: string;
  successPath: string;
  notFoundPath:string;
  permissionDeniedPath:string;
};

export type routesType = {
  path: string;
  component: any;
  private?: boolean;
  roles?:any
};

export type headerFooterType = "static" | "dynamic";
