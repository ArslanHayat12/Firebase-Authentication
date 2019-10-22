import React, { useReducer, Fragment } from "react";
import { PrivateRoute } from "./PrivateRoutes";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import AfterAuth from "../AuthProviders/AfterAuth";
import { RoutesPropsInterface } from "../interfaces/";
import { isPathExists } from "../utils/";

const Routes = (props: RoutesPropsInterface) => {
  const {
    routesList,
    isSignedIn,
    defaultRoute,
    reducerPrivate,
    initialContent,
    showFooterAfterAuth,
    showHeaderAfterAuth,
    headerFooterType,
    wrappLayoutClass,
    wrappContentClass
  } = props;

  const [data, dispatchAction] = useReducer(reducerPrivate, initialContent);
  return (
    <Fragment>
      <AfterAuth data={data} dispatchAction={dispatchAction}>
        <props.wrappLayout className={wrappLayoutClass || undefined}>
          {isSignedIn && showHeaderAfterAuth && headerFooterType === "dynamic"
            ? showHeaderAfterAuth()
            : null}
          <props.wrappContent className={wrappContentClass || undefined}>
            <Router>
              {routesList.map((x: any, i: any) => {
                const { path, component } = x;

                if (x.private && isSignedIn) {
                  return (
                    <Switch key={i}>
                      {x.private ? (
                        <PrivateRoute
                          exact={true}
                          path={path}
                          component={component}
                          isSignedIn={isSignedIn}
                          failurePath={defaultRoute && defaultRoute.failurePath}
                        />
                      ) : null}
                    </Switch>
                  );
                } else {
                  return (
                    <Switch key={i}>
                      <Route exact={true} path={path} component={component} />
                    </Switch>
                  );
                }
              })}
              {!isPathExists(routesList, window.location.pathname) ? (
                <Redirect
                  to={(defaultRoute && defaultRoute.failurePath) || "/"}
                />
              ) : null}
              {isSignedIn ? (
                <Redirect
                  to={(defaultRoute && defaultRoute.successPath) || "/"}
                />
              ) : (
                <Redirect
                  to={(defaultRoute && defaultRoute.failurePath) || "/"}
                />
              )}
            </Router>
          </props.wrappContent>
          {isSignedIn && showFooterAfterAuth && headerFooterType === "dynamic"
            ? showFooterAfterAuth()
            : null}
        </props.wrappLayout>
      </AfterAuth>
    </Fragment>
  );
};

export { Routes as default };
