import React, { useReducer, useEffect, useContext, useCallback } from "react";
import { reducer } from "../reducers/";
import { initialContent, BeforeAuthContext } from "../context/";
import Router from "../routes/Router";
import { routesList, defaultRoute } from "../routes/routes";
import { RoutesPropsBeforeAuthInterface } from "./../interfaces/";

const BeforeAuth = (props: RoutesPropsBeforeAuthInterface) => {
  const [content, dispatch] = useReducer(reducer, initialContent);
  const {
    onLoad,
    showFooterAfterAuth,
    wrappLayoutClass,
    showHeaderAfterAuth,
    reducerPrivate,
    wrappContentClass,
    headerFooterType,
  } = props;
  useEffect(() => {
    onLoad &&
      onLoad((data: any) => {
        dispatch({
          type: "UPDATE_DATA",
          isSignedIn: true,
          data: data
        });
      });
  }, []);
  const logout = useCallback(() => {
    dispatch({ type: "UPDATE_DATA", isSignedIn: false });
  }, []);
  return (
    <BeforeAuthContext.Provider value={{ content, dispatch, logout }}>
      {headerFooterType !== "dynamic" || headerFooterType !== "dynamic"? (
        <props.wrappLayout className={wrappLayoutClass || undefined}>
          {content.isSignedIn && showHeaderAfterAuth && headerFooterType !== "dynamic"
            ? showHeaderAfterAuth()
            : null}
          <props.wrappContent className={wrappContentClass || undefined}>
            <Router
              routesList={routesList}
              isSignedIn={content.isSignedIn}
              defaultRoute={defaultRoute}
              initialContent={initialContent}
              reducerPrivate={reducerPrivate}
              showHeaderAfterAuth={showHeaderAfterAuth}
              showFooterAfterAuth={showFooterAfterAuth}
              headerFooterType={headerFooterType}
              {...props}
            />
          </props.wrappContent>
          {content.isSignedIn && showFooterAfterAuth && headerFooterType !== "dynamic"
            ? showFooterAfterAuth()
            : null}
        </props.wrappLayout>
      ) : (
        <Router
          routesList={routesList}
          isSignedIn={content.isSignedIn}
          defaultRoute={defaultRoute}
          initialContent={initialContent}
          reducerPrivate={reducerPrivate}
          showHeaderAfterAuth={showHeaderAfterAuth}
          showFooterAfterAuth={showFooterAfterAuth}
          headerFooterType={headerFooterType}
          {...props}
        />
      )}
    </BeforeAuthContext.Provider>
  );
};
export default BeforeAuth;
export const useBeforeAuth = () => useContext(BeforeAuthContext);
