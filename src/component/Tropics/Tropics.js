import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Tropics = () => {
    const tropics= useLoaderData();
    const newTropics= tropics.data;
    return (
        <div className='course-box'>
            {
                newTropics.map(tropic=><Course key={tropic.id}  tropic={tropic}></Course>)
            }
        </div>
    );
};

export default Tropics;