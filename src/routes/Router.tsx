import React, { useReducer } from "react";
import { PrivateRoute } from "./PrivateRoutes";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  RouteProps,
  Switch
} from "react-router-dom";
import { reducerPrivate } from "../reducers/";
import { initialContent, AfterAuthContext } from "../context/";
interface IRoutesProps extends RouteProps {
  routesList?: any;
  isSignedIn?: boolean;
  defaultRoute?: any;
}
const Routes = (props: IRoutesProps) => {
  const isPathExists = props.routesList
    .map((x: any) => x.path)
    .includes(window.location.pathname);
  const [data, dispatchAction] = useReducer(reducerPrivate, initialContent);
  return (
    <Router>
      {props.routesList.map((x: any, i: any) => {
        const { path, component } = x;
        if (x.private && props.isSignedIn) {
          return (
            <Switch key={i}>
              {x.private ? (
                <AfterAuthContext.Provider value={{ data, dispatchAction }}>
                  <PrivateRoute
                    exact={true}
                    path={path}
                    component={component}
                    isSignedIn={props.isSignedIn}
                    failurePath={props.defaultRoute.failurePath}
                  />
                </AfterAuthContext.Provider>
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
      {!isPathExists && props.isSignedIn !== undefined ? (
        <Redirect to={props.defaultRoute.failurePath} />
      ) : null}
      {props.isSignedIn ? (
        <Redirect to={props.defaultRoute.successPath} />
      ) : props.isSignedIn === undefined ? null : (
        <Redirect to={props.defaultRoute.failurePath} />
      )}
    </Router>
  );
};

export { Routes as default };
