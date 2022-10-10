import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css';

const Course = ({tropic}) => {
    const {name,logo,total,id}=tropic;
    return (
        <div className='box'>
         <img src={logo} alt="" />
         <p>this is all course{name}</p>
         <button><Link to={`${id}`}>add to cart</Link></button>
        </div>
    );
};

export default Course;