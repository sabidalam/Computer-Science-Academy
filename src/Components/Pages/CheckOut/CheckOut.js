import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Headers from '../SharedPage/Header/Headers';

const CheckOut = () => {
    const course = useLoaderData();

    return (
        <div>
            <h3>{course.name}</h3>
        </div>
    );
};

export default CheckOut;