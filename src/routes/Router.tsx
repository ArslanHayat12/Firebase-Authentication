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
    initialContent
  } = props;
  const [data, dispatchAction] = useReducer(reducerPrivate, initialContent);
  return (
    <Fragment>
      <Router>
        {routesList.map((x: any, i: any) => {
          const { path, component } = x;
          if (x.private && isSignedIn) {
            return (
              <Switch key={i}>
                {x.private ? (
                  <AfterAuth data={data} dispatchAction={dispatchAction}>
                    <PrivateRoute
                      exact={true}
                      path={path}
                      component={component}
                      isSignedIn={isSignedIn}
                      failurePath={defaultRoute.failurePath}
                    />
                  </AfterAuth>
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
          <Redirect to={defaultRoute.failurePath} />
        ) : null}
        {isSignedIn ? (
          <Redirect to={defaultRoute.successPath} />
        ) : (
          <Redirect to={defaultRoute.failurePath} />
        )}
      </Router>
    </Fragment>
  );
};

export { Routes as default };
