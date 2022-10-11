import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Tropics.css';

const Tropics = () => {
    const tropics= useLoaderData();
    const newTropics= tropics.data;
    return (
        <div className='course-box'>
           <div  className="quiz-heading">
                <h1 className='headline'>Come teach with us</h1>
                <p className='headline2'>Become an instructor and change lives — including your own</p>
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