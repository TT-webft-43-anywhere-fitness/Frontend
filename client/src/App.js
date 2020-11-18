import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header";
import SigninForm from "./components/SigninForm";
import SignupForm from "./components/SignupForm";
import PrivateRoute from "./components/PrivateRoute";
import CustomerDashboard from "./components/CustomerDashboard";
import InstructorDashboard from "./components/InstructorDashboard";

function App() {
  return (
    <div>
      App
      <Route component={Header} />
      <Switch>
        <Route exact path="/" component={SigninForm} />
        <Route path="/signup" component={SignupForm} />
        {/* <PrivateRoute
          path="/dashboard/:role/:id"
          render={(props) => {
            if (localStorage.getItem("role") === 2) {
              return <InstructorDashboard />;
            } else if (localStorage.getItem("role") === 1) {
              return <CustomerDashboard />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        /> */}
        <PrivateRoute path="/dashboard/1/:id" component={InstructorDashboard} />
        <PrivateRoute path="/dashboard/2/:id" component={CustomerDashboard} />
        <Route path="/corie" component={SignupForm} />
        <Route path="/george" component={SigninForm} />
      </Switch>
      <CustomerDashboard />
    </div>
  );
}

export default App;
