import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Workers from '../Employee/Employee';
import './Garment.css';
const Garment = () => {
    const [employees,setEmployees] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect( () => {
        fetch('../employees.JSON')
            .then(res => res.json())
            .then(data => setEmployees(data))
    },[])
    const handleAddToCart = (employee) => {
        const newCart = [...cart,employee];
        setCart(newCart);
    }
    return (
       
            <div>
            <div className="garment-container">
                <div className="employee-container">
                    <div className="total_employee">
                    <h3>Employees: {employees.length} </h3>
                    </div>
                    <div className="employee">
                    {
                        employees.map( employee => <Workers 
                            key = {employee.id}
                            employee = {employee}
                            handleAddToCart = {handleAddToCart}
                        ></Workers>)
                    }
                    </div>
                </div>
                <div className="cart-container">
                    
                <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
        
    );
};

export default Garment;