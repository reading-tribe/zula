import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home"
import Account from "./pages/Account"
import Books from "./pages/Books"
import Read from "./pages/Read";
import { createBrowserHistory } from 'history';

export default function App() {
  const history = createBrowserHistory();
  
  return (
      <Router {...{ history }}>
        <Switch>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/read">
            <Read />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
  );
}
