import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class CustomerDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: null,
        };
    };

    // gets customer details if ID is present in URL's query params or as a prop
    componentDidMount() {
        if (this.props.id) return this.props.history.push(`/getCustomer?id=${this.props.id}`);
        const id = this.props.location.search.substring(4);
        this.getCustomer(id);
    };

    // fetches customer data
    getCustomer = async (id) => {
        let response = await fetch(`https://customer-ids.herokuapp.com/getCustomer?id=${id}`);
        let data = await response.json();
        this.setState({ customer: data });
    };
    
    // Creates key prop for dom nodes
    keyGen = () => Math.floor(10000*Math.random());

    // Returns customer obj as HTML
    customerInfo = (customer) => {
        return (
            <div>
                <h1>Customer Detail</h1>
                <div className="container-col">
                    <ul key={this.keyGen()}>
                        <li key={this.keyGen()}>
                            <h2 key={this.keyGen()} className="name">{customer?.name}</h2>
                        </li>
                        <li key={this.keyGen()}>
                            <h3 key={this.keyGen()} className="id">ID: {customer?.id}</h3>
                        </li>
                        <li key={this.keyGen()}>
                            <p key={this.keyGen()} className="role">Role: {customer?.role}</p>
                        </li>
                        <li key={this.keyGen()}>
                            <p key={this.keyGen()} className="age">Age: {customer?.age}</p>
                        </li>
                    </ul>
                    <Link to="/getCustomers">
                        <button>
                            All Customers
                        </button>
                    </Link>
                </div>
            </div>
        );
    };

    // Conditionally renders customer if fetch req is complete
    render() {
        return (
            <div className="container">
                {this.state.customer ? this.customerInfo(this.state.customer) : null}
                {this.props.id ? this.customerInfo(this.state.customer) : null}
            </div>
        );
    };
};

export default withRouter(CustomerDetail);
