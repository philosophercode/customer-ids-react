import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [{}],
            name: null,
            role: null,
            age: null,
            id: null,
        };
    };


    getCustomers = async () => {
        let response = await fetch("https://customer-ids.herokuapp.com/");
        let data = await response.json();
        this.setState({ customers: data });
        console.log('data :', data);
        return data;
    }

    render() {
        return (
            <div className="container">
                <button onClick={this.getCustomers}>GET CUSTOMERS</button>
            </div>
        );
    };
}

export default List;