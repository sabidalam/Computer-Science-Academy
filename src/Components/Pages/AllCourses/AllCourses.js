import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../SharedPage/CourseCard/CourseCard';

const AllCourses = () => {
    const courses = useLoaderData();
    return (
        <div className='mt-5'>
            <h4 className='ms-3 ms-lg-5'>Courses</h4>
            {
                courses.map(course => <CourseCard
                    key={course._id}
                    course={course}>
                </CourseCard>)
            }

        </div>
    );
};

export default AllCourses;