import React, { useReducer, useEffect, useContext } from "react";
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
    props.onLoad &&
      props.onLoad((data: any) => {
        dispatch({
          type: "UPDATE_DATA",
          isSignedIn: true,
          data: data
        });
      });
  }, []);
  {console.log(content)}
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <BeforeAuthContext.Provider value={{ content, dispatch }}>
          <Router
            routesList={routesList}
            isSignedIn={content.isSignedIn}
            defaultRoute={defaultRoute}
            initialContent={props.initialContent}
            reducerPrivate={props.reducerPrivate}
          />
        </BeforeAuthContext.Provider>
      </Layout.Content>

      <Footer />
    </Layout>
  );
};

export default BeforeAuth;
export const useBeforeAuth = () => useContext(BeforeAuthContext);