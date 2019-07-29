import React, {
  useReducer,
  useEffect,
  useContext,
  useCallback,
  useState
} from "react";
import { reducer } from "../reducers/";
import { initialContent, BeforeAuthContext } from "../context/";
import Router from "../routes/Router";
import { routesList, defaultRoute } from "../routes/routes";
import { RoutesPropsInterface } from "./../interfaces/";
import "../styles/index.css";

const BeforeAuth = (props: RoutesPropsInterface) => {
  const [content, dispatch] = useReducer(reducer, initialContent);
  const [error, setError] = useState({ message: null });
  const {
    onLoad,
    showFooterAfterAuth,
    wrappLayoutClass,
    showHeaderAfterAuth,
    reducerPrivate,
    wrappContentClass,
    headerFooterType,
    rolesList
    
  } = props;
  useEffect(() => {
    onLoad &&
      onLoad((data: any) => {
        dispatch({
          type: "UPDATE_DATA",
          isSignedIn: data && data.data ? true : false,
          data: data && data.data,
          role: data && data.role
        });
      });
  }, []);
  const logout = useCallback(() => {
    dispatch({ type: "UPDATE_DATA", isSignedIn: false });
  }, []);
  const signIn = useCallback((method: any) => {
    return method
      .then((res: any) => {
        dispatch({
          type: "UPDATE_DATA",
          isSignedIn: true,
          data: res,
          role: "Administrator"
        });
      })
      .catch((error: any) => {
        setError(error);
      });
  }, []);
  return (
    <BeforeAuthContext.Provider
      value={{ content, dispatch, logout, signIn, error }}
    >
      {typeof content.isSignedIn === "boolean" ? (
        headerFooterType !== "dynamic" ? (
          <props.wrappLayout className={wrappLayoutClass || undefined}>
            {content.isSignedIn && showHeaderAfterAuth
              ? showHeaderAfterAuth()
              : null}
            <props.wrappContent className={wrappContentClass || undefined}>
              
              <Router
                routesList={routesList}
                isSignedIn={content.isSignedIn}
                role={content.role}
                rolesList={rolesList}
                defaultRoute={defaultRoute}
                initialContent={initialContent}
                reducerPrivate={reducerPrivate}
                showHeaderAfterAuth={showHeaderAfterAuth}
                showFooterAfterAuth={showFooterAfterAuth}
                headerFooterType={headerFooterType}
                {...props}
              />
            </props.wrappContent>
            {content.isSignedIn && showFooterAfterAuth
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
            role={content.role}
            rolesList={rolesList}
            {...props}
          />
        )
      ) : (
        <div className="loader" />
      )}
    </BeforeAuthContext.Provider>
  );
};
export default BeforeAuth;
export const useBeforeAuth = () => useContext(BeforeAuthContext);
