import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import App from './App';
import CustomerDetail from './CustomerDetail';


// Check if Customer List component loads - All Customers
test('Customer List', async () => {
  const { getByText } = render(<App />);
  getByText(/list/i);
});


// Check if Customer Detail component loads - Ringo Starr
test('Customer Detail', async () => {
  const history = createMemoryHistory()
  const route = '/getCustomer?id=DmT39vQRuTyh7jsW5ktk';
  history.push(route)
  const { getByText } = render(
    <Router history={history}>
      <CustomerDetail id={'DmT39vQRuTyh7jsW5ktk'} />
    </Router>
  );
  getByText(/detail/i);
})

