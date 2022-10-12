import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Tropics.css';
import codeImages from '../images/headerImages.jpg';

const Tropics = () => {
    const tropics= useLoaderData();
    const newTropics= tropics.data;
    return (
        <div className='course-box'>
           <div  className="quiz-heading">
                <div><h1 className='headline'>Come teach with us</h1>
                <p className='headline2'>Become an Developer and change lives — including your own</p></div>
                <div className='headerImage' >
                    <img src={codeImages} alt="" />
                 </div>
            </div>
            <div className='course-quiz'>
            {
                newTropics.map(tropic=><Course key={tropic.id}  tropic={tropic}></Course>)
            }
            </div>

           
        </div>
    );
};

export default Tropics;