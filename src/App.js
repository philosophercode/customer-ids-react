import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams
} from "react-router-dom";

import List from "./List";
import ListItem from "./ListItem";
import CustomerDetail from "./CustomerDetail";

function App() {

  return (
    <div className="App">
      {/* {id} */}
      <Router>
        <Switch>
          {/* <Route path="/" component={List} />
          <Route path="/getCustomers" component={List} />
          <Route path="*" component={List} /> */}
          <Route exact path="/">
            <List />
          </Route>
          <Route path="/getCustomers/:id" children={<Customer />} />

          <Route path="*">
            <h1>404</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


function Customer() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <CustomerDetail id={id} />
  );
}

export default App;
