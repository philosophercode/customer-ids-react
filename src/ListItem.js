import React from 'react';

function ListItem({ customer, setCustomer, id }) {
    // if (customer) {
    //     console.log('CUSTOMER :', customer);
    //     return <Customer customer={customer} />;
    // } else {
    //     (async (customer, id) => {
    //         let response = await fetch(`https://customer-ids.herokuapp.com/getCustomer?id=${id}`);
    //         let data = await response.json();
    //         customer = data;
    //         console.log('data :', customer);
    //         return customer;
    //     })(customer, id)
    // }

    const selectedCustomer = () => {
        setCustomer(customer)
    }

    const getCustomer = async (id) => {
        let response = await fetch(`https://customer-ids.herokuapp.com/getCustomer?id=${id}`);
        let data = await response.json();
        customer = data;
        console.log('get customer :', customer);
        return <Customer customer={customer} />;
        // return <h1>{id}</h1>
    };

    return (
        <div className="container" onClick={selectedCustomer}>
            {/* {customer ?
                <ul>
                    <li>
                        <h2 id="name">{customer.name}</h2>
                    </li>
                    <li>
                        <h3 id="id">{customer.id}</h3>
                    </li>
                    <li>
                        <p id="role">{customer.role}</p>
                    </li>
                    <li>
                        <p id="age">{customer.age}</p>
                    </li>
                </ul>
                : id} */}
            {/* {customer ? <Customer customer={customer} /> : getCustomer(id)}
            <Customer customer={customer} />  */}
        </div>
    );
};

function Customer({ customer }) {
    return (
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
    );
}

export default ListItem;