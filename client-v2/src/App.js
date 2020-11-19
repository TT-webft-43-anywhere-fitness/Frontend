import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <Route>
        <Header />
      </Route>
      <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/signup">
          <Signup />
        </Route>
        <Route exact path="/">
          <Signin />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
