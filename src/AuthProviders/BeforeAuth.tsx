import React, { useReducer, useEffect,useContext } from "react";
import { reducer } from "../reducers/";
import { initialContent, BeforeAuthContext } from "../context/";
import { Layout } from "antd";
import "antd/dist/antd.css";
import Router from "../routes/Router";
import { routesList, defaultRoute } from "../routes/routes";
const { Header, Footer } = Layout;

const BeforeAuth = (props: any) => {
  const [content, dispatch] = useReducer(reducer, initialContent);
  useEffect(() => {
    props.checkAuth((data: any) => {
      dispatch({
        value: true,
        data: data
      });
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
export const useBeforeAuth=useContext(BeforeAuthContext);
export default BeforeAuth;
