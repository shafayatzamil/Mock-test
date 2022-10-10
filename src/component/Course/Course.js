import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css';

const Course = ({tropic}) => {
    const {name,logo,total,id}=tropic;
    return (
        <div className='box'>
         <img src={logo} alt="" />
         <div className='tiny-box'>
         <h3>{name}</h3>
      
         <Link className='btn-link' to={`/tropic/${id}`}>add to cart</Link>

         </div>
        </div>
    );
};

export default Course;