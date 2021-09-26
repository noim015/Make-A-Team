import React from 'react';
import './Employee.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Workers = (props) => {
    //Shopping Cart Icon
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const {name,designation,age,salary,img,department,workingfor} = props.employee;
    return (        
            <div className="worker">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="profile">
                        <h3><b>Name:</b> <small>{name}</small> </h3>
                        <h4><b>Designation:</b> {designation}</h4>
                        <h4><b>Department:</b> {department}</h4>
                        <h3><b>Age:</b> <small>{age}</small> </h3>
                        <h4><b>Salary:</b> {salary}</h4>
                        <h4><b>Working For:</b> {workingfor}</h4>
                     <div>
                        <button className="btn-regular" onClick={()=>props.handleAddToCart(props.employee)}> {element} Add To Cart</button>
                     </div>
                </div>
            </div>
    );
};

export default Workers;