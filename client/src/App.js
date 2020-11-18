import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import SigninForm from "./components/SigninForm";
import SignupForm from "./components/SignupForm";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import CustomerDashboard from "./components/CustomerDashboard";
import './styles/DashboardCSS.css'

function App() {
  return (
    <div>
      App
      <Route component={Header} />
      <Switch>
        <Route exact path="/" component={SigninForm} />
        <Route path="/signup" component={SignupForm} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
      <CustomerDashboard />
    </div>
  );
}

export default App;
