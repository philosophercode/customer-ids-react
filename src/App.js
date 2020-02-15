import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import CustomerDetail from "./CustomerDetail";
import List from "./List";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Gets all customers */}
          <Route exact path="/" children={<List />} />
          {/* Gets all customers */}
          <Route exact path="/getCustomers" children={<List />} />
          {/* Gets specific customers */}
          <Route exact path="/getCustomer" children={<CustomerDetail />} />
          {/* Page not found - 404 */}
          <Route path="*">
            <h1>404</h1>
          </Route>
        </Switch>
      </Router>
      <footer>Isaac Steinberg</footer>
    </div>
  );
};

export default App;
