import * as React from 'react';
import {
    Route,
    Redirect,
    RouteProps,
    
} from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
    component: any;
    isSignedIn?: boolean;
    failurePath?:string;
}

export const PrivateRoute = (props: PrivateRouteProps) => {
    const { component: Component, isSignedIn=false,failurePath, ...rest } = props;
    return (
        <Route
            {...rest}
            render={(routeProps) =>
                isSignedIn ? (
                    <Component {...routeProps} />
                ) : (
                        <Redirect
                            to={{
                                pathname: failurePath,
                                state: { from: routeProps.location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;