import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";

// interface IProps {
//   children: any;
//   rest?: {
//     [x: string]: any;
//   };, 
//   exact: boolean;
//   path: string
// }

const UnauthenticatedRoute: React.FunctionComponent = ({ children, ...rest }) => {
  const  {isAuthenticated}    = useAppContext();
  return <Route {...rest}>{isAuthenticated ? children : <Redirect to="/" />}</Route>;
};

export default UnauthenticatedRoute;
