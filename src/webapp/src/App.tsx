import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserHistory } from "history";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import LandingAuth from "./pages/LandingAuthPage";

export default function App() {
  const history = createBrowserHistory();

  return (
    <Router {...{ history }}>
      <Switch>
        <Route path="/auth/login">
          <Login />
        </Route>
        <Route path="/auth/register">
          <Register />
        </Route>
        <Route path="/auth/landingAuth">
          <LandingAuth />
        </Route>
      </Switch>
    </Router>
  );
}
