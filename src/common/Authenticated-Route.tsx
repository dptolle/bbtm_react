import React from "react";
import { RouteProps } from "react-router";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ROUTE } from "../utils/routes";

interface AuthenticatedRouteProps extends RouteProps {
  component: any;
}

const AuthenticatedRoute = ({
  component: C,
  ...props
}: AuthenticatedRouteProps) => {
  const { currentUser } = useAuth();
  return (
    <Route
      {...props}
      render={(routeProps) =>
        currentUser ? <C {...routeProps} /> : <Redirect to={ROUTE.LOGIN} />
      }
    />
  );
};

export default AuthenticatedRoute;
