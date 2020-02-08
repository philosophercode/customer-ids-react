import React from 'react';

function ListItem({ customer, setCustomer }) {
    
    const selectedCustomer = () => {
        setCustomer(customer)
    }

    return (
        <div className="container" onClick={selectedCustomer}>
            <ul>
                <li>
                    <h2>{customer.name}</h2>
                </li>
                <li>
                    <h3>{customer.id}</h3>
                </li>
                <li>
                    {customer.role}
                </li>
                <li>
                    {customer.age}
                </li>
            </ul>
        </div>
    );
};

export default ListItem;