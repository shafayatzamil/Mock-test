import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';

const Tropics = () => {
    const tropics= useLoaderData();
    const newTropics= tropics.data;
    return (
        <div>
            <h2> this is from Tropics bro:{tropics.data.length}</h2>
            {
                newTropics.map(tropic=>)
            }
        </div>
    );
};

export default Tropics;