export type BeforeAuthContextType = {
    content?: any;
    dispatch?: any;
    isSignedIn?:any;
    data?:any;
    logout?: any;
  };

  export type AfterAuthContextType = BeforeAuthContextType & {
    dispatchAction?: any;
  };