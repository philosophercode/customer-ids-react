import React, { Component } from 'react';
import { useLocation, withRouter } from "react-router";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     Redirect,
//     useLocation,
//     useParams
// } from "react-router-dom";

import CustomerDetail from "./CustomerDetail"

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: null,
            customer: null,
        };
    };

    componentDidMount() {
        this.getCustomers();
    }


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

    customerList = (customer, i) => {
        if (this.state.customer) {
            return <CustomerDetail customer={this.state.customer} />
        }
        return (
            <ul key={i} onClick={() => this.setState({ customer: customer })}>
                <li>
                    <h2 id="name">{customer?.name}</h2>
                </li>
                <li>
                    <h3 id="id">{customer?.id}</h3>
                </li>
            </ul>
        );
    }

    render() {
        if (this.state.customer) {
            return (
                <CustomerDetail customer={this.state.customer} />
            );
        } else if(this.props.location.search) {
            const id = this.props.location.search.substring(4);
            return <CustomerDetail id={id} />
        }else {

            return (
                <div className="container">
                    {this.state.customers ? <h1>Customer List</h1> : null}

                    {this.state.customers ?
                        this.state.customers.map((customer, i) => this.customerList(customer, i))
                        : null
                    }
                    {/* {this.state.customers ?
                        this.state.customers.map((customer, i) => <ListItem customer={customer} key={i} setCustomer={this.setCustomer} />)
                        : null
                    } */}
                    {/* {!this.state.customer? <button onClick={this.getCustomers}>GET CUSTOMERS</button> : null} */}
                </div>
            );
        }

    };
}

// export default List;
export default withRouter(List);