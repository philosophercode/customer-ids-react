import React from 'react';

function ListItem({ customer, setCustomer, id }) {

    const selectedCustomer = () => {
        setCustomer(customer)
    }

    return (
        <div className="container" onClick={selectedCustomer}>
            {customer ?
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
                : id}
        </div>
    );
};

export default ListItem;