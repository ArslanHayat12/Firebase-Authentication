import * as React from "react";
import { PrivateRoute } from "./PrivateRoutes";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  RouteProps,
  Switch
} from "react-router-dom";
interface IRoutesProps extends RouteProps {
  routesList?: any;
  isSignedIn?: boolean;
  defaultRoute?: any;
}
const Routes = (props: IRoutesProps) => {
  const isPathExists = props.routesList
    .map((x: any) => x.path)
    .includes(window.location.pathname);

  return (
    <Router>
      {props.routesList.map((x: any, i: any) => {
        const { path, component } = x;

        if (x.private || props.isSignedIn) {
          return (
            <Switch key={i}>
              {x.private ? (
                <PrivateRoute
                  exact={true}
                  path={path}
                  component={component}
                  isSignedIn={props.isSignedIn}
                  failurePath={props.defaultRoute.failurePath}
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
      {!isPathExists ? <Redirect to={props.defaultRoute.failurePath} /> : null}
      {props.isSignedIn ? (
        <Redirect to={props.defaultRoute.successPath} />
      ) : null}
    </Router>
  );
};

export { Routes as default };
