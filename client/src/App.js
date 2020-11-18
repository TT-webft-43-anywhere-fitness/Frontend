import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header";
import SigninForm from "./components/SigninForm";
import SignupForm from "./components/SignupForm";
import PrivateRoute from "./components/PrivateRoute";
import CustomerDashboard from "./components/CustomerDashboard";

import './styles/DashboardCSS.css'

import InstructorDashboard from "./components/InstructorDashboard";


function App() {
  const [role, setRole] = useState("");

  useEffect(() => {
    localStorage.getItem("role");
  }, []);

  return (
    <div>
      App
      <Route component={Header} />
      <Switch>
        <Route exact path="/" component={SigninForm} />
        <Route path="/signup" component={SignupForm} />
        <PrivateRoute
          path="/dashboard/:id"
          render={(props) => {
            if (localStorage.getItem("role") === 2) {
              return <InstructorDashboard />;
            } else if (localStorage.getItem("role") === 1) {
              return <CustomerDashboard />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <PrivateRoute path="/instructor/:id" component={InstructorDashboard} />
        <PrivateRoute path="/customer/:id" component={CustomerDashboard} />
        <Route path="/corie" component={SignupForm} />
        <Route path="/george" component={SigninForm} />
      </Switch>
      <CustomerDashboard />
    </div>
  );
}

export default App;
