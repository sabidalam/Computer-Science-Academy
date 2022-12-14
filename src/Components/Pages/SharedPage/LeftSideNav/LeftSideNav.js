import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        fetch('https://computer-science-academy-server.vercel.app/topics')
            .then(res => res.json())
            .then(data => setTopics(data));

    }, [])

    return (
        <div className='mt-5'>
            <h4>All Topic</h4>
            {
                topics.map(topic => <p key={topic.id}>
                    <Link className='text-decoration-none' to={`/topic/${topic.id}`}>{topic.name}</Link>
                </p>)
            }

        </div>
    );
};

export default LeftSideNav;