import React, { useReducer, useEffect, useCallback } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import { routesList, defaultRoute } from "./routes/routes";
import { auth } from "./config/index";
import BeforeAuth from "./AuthProviders/BeforeAuth";
import {initialContent} from "./context/";
import { reducerPrivate } from "./reducers/";
const { Header, Footer } = Layout;

const App = () => {
  const initialAuthCheck = (callback: any) => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      if (user) callback(user && (user.email || user.phoneNumber));
      unsubscribe();
    });
  };

  return (
    <Layout>
      <Header />
      <Layout.Content>
        <BeforeAuth
          routesList={routesList}
          defaultRoute={defaultRoute}
          initialAuthCheck={initialAuthCheck}
          initialContent={initialContent}
          reducerPrivate={reducerPrivate}
        />
      </Layout.Content>

      <Footer />
    </Layout>
  );
};

export default App;
