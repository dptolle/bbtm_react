import React from 'react';
import { RouteProps } from 'react-router';
import {  Redirect, Route } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ROUTE } from '../utils/routes';

interface UnauthenticatedRouteProps extends RouteProps {
  component: any;
}

const UnauthenticatedRoute = ({ component: C, ...props }: UnauthenticatedRouteProps) => {
  const { currentUser } = useAuth();
  return (
    <Route
      {...props}
      render={(routeProps) =>
        !currentUser ? <C {...routeProps} /> : <Redirect to={ROUTE.TEAM_SELECTION} />
      }
    />
  );
};

export default UnauthenticatedRoute;
