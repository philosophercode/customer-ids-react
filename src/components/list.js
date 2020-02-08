import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: null,
            customer: null,
        };
    };


    getCustomers = async () => {
        let response = await fetch("https://customer-ids.herokuapp.com/");
        let data = await response.json();
        this.setState({ customers: data });
        console.log('data :', data);
        return data;
    };

    setCustomer = (customer) => {
        this.setState({ customer: customer });
        console.log("~~~WOOOOOOW~~~", customer);
    };



    render() {
        return (
            <div className="container">
                {this.state.customers ? <h1>Customer List</h1> : null}

                {this.state.customers ?
                    this.state.customers.map((customer, i) => <ListItem customer={customer} key={i} setCustomer={this.setCustomer} />)
                    : null
                }
                <button onClick={this.getCustomers}>GET CUSTOMERS</button>
            </div>
        );
    };
}

export default List;