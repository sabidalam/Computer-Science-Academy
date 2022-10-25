import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../SharedPage/CourseCard/CourseCard';

const Home = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h4>Courses</h4>
            {
                courses.map(course => <CourseCard
                    key={course._id}
                    course={course}>
                </CourseCard>)
            }
        </div>
    );
};

export default Home;