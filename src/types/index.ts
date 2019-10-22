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
  dispatchAction?: any;
};

export type defaultRoutesTypes = {
  failurePath: string;
  successPath: string;
};

export type routesType = {
  path: string;
  component: any;
  private?: boolean;
};

export type headerFooterType = "static" | "dynamic";
