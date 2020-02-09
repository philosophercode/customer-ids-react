import React, { Component } from 'react';
import { withRouter } from "react-router";

class CustomerDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: null,
            id: null
        };
    };

    componentDidMount() {
        if (this.props.id) {
            this.getCustomer(this.props.id);
            this.props.history.push(`/getCustomers/${this.props.id}`);
        } else if (this.props.customer) {
            this.props.history.push(`/getCustomers/${this.props.customer.id}`);
            this.getCustomer(this.props.customer.id);
        }
        // console.log('history.push()', this.props.history.push(`/getCustomers/${this.props.customer.id}`))
    }

    getCustomer = async (id) => {
        let response = await fetch(`https://customer-ids.herokuapp.com/getCustomer?id=${id}`);
        let data = await response.json();
        this.setState({ customer: data[0] });
        console.log('get customer :', data);
        // this.props.history.push(`/getCustomers/${id}`);
        return this.customerInfo(data);
        // return JSON.stringify(data);
    };

    setCustomer = (customer) => {
        this.setState({ customer: customer });
        console.log("~~~WOOOOOOW~~~", customer);
    };

    customerInfo = (customer) => {
        console.log('customer', customer)
        return (
            <div>
                <h1>Customer Detail</h1>
                <ul>
                    <li>
                        <h2 id="name">{customer?.name}</h2>
                    </li>
                    <li>
                        <h3 id="id">{customer?.id}</h3>
                    </li>
                    <li>
                        <p id="role">{customer?.role}</p>
                    </li>
                    <li>
                        <p id="age">{customer?.age}</p>
                    </li>
                </ul>
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                {this.props.id ? null : this.customerInfo(this.props.customer) }
                {this.state.customer ? this.customerInfo(this.state.customer) : null}
            </div>
        );
    };
}

export default withRouter(CustomerDetail);