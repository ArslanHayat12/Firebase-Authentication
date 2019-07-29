import React from "react";
import { routesList, defaultRoute } from "./routes/routes";
import { Roles } from "./routes/roles";
import { auth } from "./config/index";
import BeforeAuth from "./AuthProviders/BeforeAuth";
import { initialContent } from "./context/";
import { reducerPrivate } from "./reducers/";
import { Layout } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer"
import "antd/dist/antd.css";
import "./styles/index.css";

const App = () => {
  const onLoad = (callback: any) => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      if (user) callback({data:user,role:"Administrator"});
      else  callback(null);
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
      showHeaderAfterAuth={(res:any)=><Header res={res}/>}
      showFooterAfterAuth={() => <Footer />}
      wrappLayout={Layout}
      wrappContent={Layout.Content}
      wrappLayoutClass="layout"
      wrappContentClass="content"
      headerFooterType="dynamic"
      rolesList={Roles}
    />
  );
};

export default App;
