import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserHistory } from "history";
//Pages
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import LandingAuth from "./pages/LandingAuthPage";
// Redux
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  const history = createBrowserHistory();

  return (
    <Provider store={store}>
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
    </Provider>
  );
}
