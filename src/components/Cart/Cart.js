import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    
    let total =0;
    for(const product of cart){
        total = total + product.salary;
    }
    
    return (
        <div>
            <h2>Employee Added: {props.cart.length}</h2>
              <h3>Total Cost: {total} </h3>
              <p>Employees: {
                  cart.map(employee => 
                      <li className="cart_item" ><img src={employee.img} alt="" />{employee.name}</li> 
                 
                  )
              } </p>
        </div>
    );
};

export default Cart;