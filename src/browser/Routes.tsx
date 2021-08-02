import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Auth from "../browser/components/Auth";
import Home from "../browser/components/Home";
import AuthenticatedRoute from "../browser/components/AuthenticatedRoute";
import UnauthenticatedRoute from "../browser/components/UnauthenticatedRoute";

export default function Routes() {
  return (
    // <Auth/>
    // // <Switch>
    // //   <UnauthenticatedRoute exact={true} path="/login">
    // //     <Auth />
    // //   </UnauthenticatedRoute>
    // //   <AuthenticatedRoute exact={true} path ="/">
    // //     <Home />
    // //   </AuthenticatedRoute>
    // // </Switch>
    
      //   <Auth/>
    // <Switch>
    //   <UnauthenticatedRoute exact path="/login">
    //     <Auth />
    //   </UnauthenticatedRoute>
    //   <AuthenticatedRoute exact  path ="/">
    //     <Home />
    //   </AuthenticatedRoute>
    // </Switch>

    <Auth/>

  );
}

