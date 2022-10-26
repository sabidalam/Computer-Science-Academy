import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaDownload } from 'react-icons/fa';

const Courses = () => {
    const courseDetail = useLoaderData();
    const { _id, topic_id, thumbnail_url, name, details, instructor, others_info, price } = courseDetail;
    return (
        <div>
            <Card className='mx-auto mb-5 w-75'>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <h6>Computer Science Course {topic_id}</h6>
                    <button className='border-0'><FaDownload></FaDownload></button>
                </Card.Header>
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
                    <h6>Price: ${price}</h6>
                    <Link to={`/checkout/${_id}`}>
                        <Button variant="primary">Get Premium Access</Button>
                    </Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Courses;