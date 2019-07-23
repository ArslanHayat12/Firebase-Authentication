import React,{useCallback} from "react";
import { routesList, defaultRoute } from "./routes/routes";
import { auth } from "./config/index";
import BeforeAuth, { useBeforeAuth } from "./AuthProviders/BeforeAuth";
import { initialContent } from "./context/";
import { reducerPrivate } from "./reducers/";
import { Layout,Button } from "antd";
import "antd/dist/antd.css";
import "./styles/index.css";
const { Header, Footer } = Layout;
const Head=({res}:any)=>{
  const {  logout,content } = useBeforeAuth();
  const logoutAction = useCallback(() => {
    auth.signOut();
    logout();
  }, []);
  return(
    <Header>
        <span style={{float:"left",color:"white"}}>  Quotes App </span>
        <span style={{float:"right",color:"white"}}> {content.data}<Button onClick={logoutAction}>Logout </Button> </span>
       
    </Header>
  )
}
const App = () => {
  const onLoad = (callback: any) => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      if (user) callback(user && (user.email || user.phoneNumber));
      unsubscribe();
    });
  };

  return (
    <BeforeAuth
      routesList={routesList}
      defaultRoute={defaultRoute}
      onLoad={onLoad}
      initialContent={initialContent}
      reducerPrivate={reducerPrivate}
      showHeaderAfterAuth={(res:any)=><Head res={res}/>}
      showFooterAfterAuth={() => <Footer />}
      wrappLayout={Layout}
      wrappContent={Layout.Content}
      wrappLayoutClass="layout"
      wrappContentClass="content"
      headerType="dynamic"
      footerType="static"
    />
  );
};

export default App;
