import React, { Component } from 'react';
import { withRouter } from "react-router";
import CustomerDetail from "./CustomerDetail";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: null,
            id: null
        };
    };

    componentDidMount() {
        this.getCustomers();
    };

    getCustomers = async () => {
        let response = await fetch("https://customer-ids.herokuapp.com/");
        let data = await response.json();
        this.setState({ customers: data });
        console.log('data :', data);
        return data;
    };

    keyGen = () => Math.floor(10000*Math.random());

    customerList = (customer) => {
        if (this.state.id) return <CustomerDetail key={this.keyGen()} id={this.state.id} />;
        return (
            <ul className="customer" key={this.keyGen()} onClick={() => this.setState({ id: customer.id })}>
                <li key={this.keyGen()}>
                    <h2 key={this.keyGen()} className="name">{customer?.name}</h2>
                </li>
                <li key={this.keyGen()}>
                    <h3 key={this.keyGen()} className="id">{customer?.id}</h3>
                </li>
            </ul>
        );
    };

    render() {
        return (
            <div key={this.keyGen()}>
                <h1>Customer List</h1>
                <div className="container" key={this.keyGen()}>
                    {this.state.customers ?
                        this.state.customers.map(customer => this.customerList(customer))
                        : null
                    }
                </div>
            </div>
        );
    };
};

export default withRouter(List);
