import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statics.css';

const Statics = () => {
    const data=[
        {"id":1,"name":"React","logo":"https://live.staticflickr.com/65535/52413593240_e00326e727_o.png","total":8},
        {"id":2,"name":"JavaScript","logo":"https://live.staticflickr.com/65535/52412638962_12e932256a_o.png","total":9},
        {"id":4,"name":"CSS","logo":"https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png","total":8},
        {"id":5,"name":"Git","logo":"https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png","total":11}
    ];
    return (
        <div className='statistic-box'>
            <h2>Statics of the marks</h2>
            <LineChart width={700} height={500} data={data}>
            <Line type="monotone" dataKey="total" stroke="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            </LineChart>
        </div>
    );
};

export default Statics;