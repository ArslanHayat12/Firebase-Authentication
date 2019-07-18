import React, { useReducer, useEffect } from "react";
import { reducer } from "./reducers/";
import { initialContent, BeforeAuthContext } from "./context/";
import { Layout } from "antd";
import "antd/dist/antd.css";
import Router from "./routes/Router";
import { routesList, defaultRoute } from "./routes/routes";
import { auth } from "./config/index";
const { Header, Footer } = Layout;

const App = () => {
  const [content, dispatch] = useReducer(reducer, initialContent);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      if (user)
        dispatch({
          type: "UPDATE_DATA",
          value: true,
          data: user && (user.email || user.phoneNumber)
        });
      unsubscribe();
    });
  }, []);
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <BeforeAuthContext.Provider value={{ content, dispatch }}>
          <Router
            routesList={routesList}
            isSignedIn={content.value}
            defaultRoute={defaultRoute}
          />
        </BeforeAuthContext.Provider>
      </Layout.Content>

      <Footer />
    </Layout>
  );
};

export default App;
