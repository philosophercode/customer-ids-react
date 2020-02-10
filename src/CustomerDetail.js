import React, { Component } from 'react';
import { useLocation, withRouter } from "react-router";
import List from './List'
class CustomerDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: null,
            id: null
        };
    };

    // useQuery = () => {
    //     return new URLSearchParams(useLocation().search);
    // }

    // query = this.useQuery();
    // console.log('query.get("id")', query.get("id"))

    componentDidMount() {
        // if (this.props.location.search.length === 0) {
        //     console.log('this.props.location', this.props.location)
        //     return <List />
        // }
        if (this.props.location.search) {
            // console.log(new URLSearchParams(this.props.location.search);)
            const id = this.props.location.search.substring(4);
            this.setState({ id: id});
            console.log("params", id)
            this.props.history.push(`/getCustomer?id=${id}`);
            this.getCustomer(id);
        } else if (this.props.customer) {
            const id = this.props.customer.id;
            this.setState({ id: id});
            console.log("params", id);
            this.props.history.push(`/getCustomer?id=${id}`);
            this.getCustomer(id);
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
                {/* {this.props.id ? null : this.customerInfo(this.props.customer)} */}
                {this.state.customer ? this.customerInfo(this.state.customer) : null}
            </div>
        );
    };
}

export default withRouter(CustomerDetail);