import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";

interface AuthenticateRouteProps extends RouteProps {}

const AuthenticatedRoute: React.FunctionComponent<AuthenticateRouteProps> = ({ ...rest }) => {
  const { isAuthenticated } = useAppContext();

  if (isAuthenticated) return <Redirect to="/" />;
  return <Route {...rest} />;
};

export default AuthenticatedRoute;
