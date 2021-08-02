import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";



interface UnauthenticateRouteProps extends RouteProps {}

 const UnauthenticatedRoute: React.FunctionComponent<UnauthenticateRouteProps> = ({ children, ...rest}) => {
 
  const { isAuthenticated } = useAppContext();

  if (!isAuthenticated) return <Redirect to="/login" />;
  return <Route {...rest} />;
};


export default UnauthenticatedRoute;
