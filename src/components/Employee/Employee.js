import React from 'react';
import './Employee.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Workers = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const {name,designation,age,salary,img,department,workingfor} = props.employee;
    return (
        
            <div className="worker">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="profile">
                    
                        <h3>Name: <small>{name}</small> </h3>
                        <h4>Designation: {designation}</h4>
                        <h4>Department: {department}</h4>
                        <h3>Age: <small>{age}</small> </h3>
                        <h4>Salary: {salary}</h4>
                        <h4>Working For: {workingfor}</h4>
                    
                    <div>
                    <button className="btn-regular" onClick={()=>props.handleAddToCart(props.employee)}> {element} Add To Cart</button>
                    </div>
                </div>
            </div>
       
    );
};

export default Workers;