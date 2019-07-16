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
import { initialContent, AppContext2 } from "../context/";
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

        if (x.private || props.isSignedIn) {
          return (
            <Switch key={i}>
              {x.private ? (
                <AppContext2.Provider value={{ data, dispatchAction }}>
                  <PrivateRoute
                    exact={true}
                    path={path}
                    component={component}
                    isSignedIn={props.isSignedIn}
                    failurePath={props.defaultRoute.failurePath}
                  />
                </AppContext2.Provider>
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
      {!isPathExists ? <Redirect to={props.defaultRoute.failurePath} /> : null}
      {props.isSignedIn ? (
        <Redirect to={props.defaultRoute.successPath} />
      ) : null}
    </Router>
  );
};

export { Routes as default };
