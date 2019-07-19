export type BeforeAuthContextType = {
    content?: any;
    dispatch?: any;
    isSignedIn?:any;
    data?:any;
  };

  export type AfterAuthContextType = {
    data?: any;
    dispatchAction?: any;
    logout?: any;
    content?: any;
    signIn?:any;
  };