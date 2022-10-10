import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Tropics = () => {
    const tropics= useLoaderData();
    console.log(tropics);
    return (
        <div>
            <h2> this is from Tropics bro:{tropics.length}</h2>
        </div>
    );
};

export default Tropics;