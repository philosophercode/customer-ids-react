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

    componentDidMount() {
        if (this.props.id) return this.props.history.push(`/getCustomer?id=${this.props.id}`);
        const id = this.props.location.search.substring(4);
        this.getCustomer(id);
    };

    getCustomer = async (id) => {
        let response = await fetch(`https://customer-ids.herokuapp.com/getCustomer?id=${id}`);
        let data = await response.json();
        this.setState({ customer: data });
    };
    
    keyGen = () => Math.floor(10000*Math.random());

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
                            <h3 key={this.keyGen()} className="id">{customer?.id}</h3>
                        </li>
                        <li key={this.keyGen()}>
                            <p key={this.keyGen()} className="role">{customer?.role}</p>
                        </li>
                        <li key={this.keyGen()}>
                            <p key={this.keyGen()} className="age">{customer?.age}</p>
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

    render() {
        return (
            <div className="container">
                {this.state.customer ? this.customerInfo(this.state.customer) : null}
            </div>
        );
    };
};

export default withRouter(CustomerDetail);
