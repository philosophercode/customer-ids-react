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
          <Route exact path="/" children={<List />} />
          <Route exact path="/getCustomers" children={<List />} />
          <Route exact path="/getCustomer" children={<CustomerDetail />} />
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
