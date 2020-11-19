import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import SigninForm from "./components/SigninForm";
import SignupForm from "./components/SignupForm";
import PrivateRoute from "./components/PrivateRoute";

import Dashboard from "./components/Dashboard";
import CustomerDashboard from "./components/CustomerDashboard";

import "./styles/DashboardCSS.css";

function App() {
  return (
    <div>
      App
      <Route component={Header} />
      <Switch>
        <Route exact path="/" component={SigninForm} />
        <Route path="/signup" component={SignupForm} />
        <PrivateRoute path="/dashboard/:id" component={Dashboard} />
        <Route path="/corie" component={SignupForm} />
        <Route path="/george" component={SigninForm} />
      </Switch>
      {/* <CustomerDashboard /> */}
    </div>
  );
}

export default App;
