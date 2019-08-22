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
    wrappContentClass,
    role,
    rolesList
  } = props;

  const [data, dispatchAction] = useReducer(reducerPrivate, initialContent);
  const isSecuredPath = routesList
    .filter((x: any) => x.private === true)
    .map((x: any) => x.path)
    .includes(window.location.pathname);
  let newPath: any = [];
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
                const { path, component, roles } = x;
                if (
                  (rolesList &&
                    rolesList.length &&
                    (roles && roles.length && roles.includes(role))) ||
                  !roles
                ) {
                } else {
                  newPath.push(path);
                }

                if (x.private && (isSignedIn || isSignedIn === undefined)) {
                  return (
                    <Switch key={i}>
                      {x.private ? (
                        <PrivateRoute
                          exact={true}
                          path={path}
                          component={component}
                          isSignedIn={isSignedIn}
                          failurePath={defaultRoute.failurePath}
                        />
                      ) : /* {showFooterAfterAuth && footerType === "dynamic"
                      ? showFooterAfterAuth()
                      : null} */

                      null}
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
                <Redirect to={defaultRoute.notFoundPath} />
              ) : isSignedIn ? (
                <Redirect
                  to={
                    isSecuredPath
                      ? window.location.pathname
                      : defaultRoute.successPath
                  }
                />
              ) : (
                <Redirect to={defaultRoute.failurePath} />
              )}
              {newPath.includes(window.location.pathname) ? (
                <Redirect to={defaultRoute.permissionDeniedPath} />
              ) : null}
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
