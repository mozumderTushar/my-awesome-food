import React from 'react';

const Cart = (props) => {
    const { title, price } = props.item;
    return (
        <div>
             <li className="list-group-item d-flex my-2 shadow justify-content-between">
                <span>{title}</span> <span> ${price}</span>
            </li>
        </div>
    );
};

export default Cart;