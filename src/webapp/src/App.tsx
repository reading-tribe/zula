import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserHistory } from "history";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Books from "./pages/Books";
import Read from "./pages/Read";
import NewTranslation from "./pages/NewTranslation";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";

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
        <Route path="/books">
          <Books />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/read">
          <Read />
        </Route>
        <Route path="/new/translation">
          <NewTranslation />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
