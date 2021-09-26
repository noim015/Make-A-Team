import React from 'react';
import './Cart.css';
import { faUsers,faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Cart = (props) => {
    const {cart} = props;
    let total =0;
    for(const employee of cart){
        total = total + employee.salary;
    }
    return (
        <div className="cart">
            <h2><FontAwesomeIcon icon={faUsers} /> Employees Added: {props.cart.length}</h2>
              <h3><FontAwesomeIcon icon={faDollarSign} /> Total Cost: {total} </h3>
              <h4>Employees:  </h4> {
                  cart.map(employee => 
                      <li className="cart_item" ><img src={employee.img} alt="" />{employee.name}</li> 
                  )
              }
        </div>
    );
};

export default Cart;