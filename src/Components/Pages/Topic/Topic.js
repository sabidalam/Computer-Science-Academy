import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topic = () => {
    const topic = useLoaderData();
    console.log(topic);
    return (
        <div>


        </div>
    );
};

export default Topic;