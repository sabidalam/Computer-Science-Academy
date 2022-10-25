import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Courses = () => {
    const courseDetail = useLoaderData();
    const { thumbnail_url, name, details, instructor, others_info } = courseDetail;
    return (
        <div>
            <Card className='mx-auto mb-5 w-75'>
                <Card.Img className='mt-4 mx-auto w-75' variant="top" src={thumbnail_url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p className='fw-semibold mt-4 mb-2'>COURSE DESCRIPTION</p>
                        {details}
                    </Card.Text>
                    <p className='fw-semibold'>Instructor: {instructor}</p>
                    <p>Department: {others_info?.departments}</p>
                    <p>Topic: {others_info?.topics}</p>
                    <Link>
                        <Button variant="primary">Get Premium Access</Button>
                    </Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Courses;