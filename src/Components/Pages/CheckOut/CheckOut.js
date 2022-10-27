import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';

const CheckOut = () => {
    const course = useLoaderData();
    const { name, instructor, thumbnail_url, others_info, level, rating, price } = course;

    return (
        <div className='mt-5'>
            <Card>
                <Card.Header as="h5">{name}</Card.Header>
                <Card.Body>
                    <div className='d-md-flex justify-content-between'>
                        <div>
                            <h5>Instructor: {instructor}</h5>
                            <p className='fw-semibold mb-0'>Topic: {others_info.topics}</p>
                            <p className='fw-semibold m-0'>Level: {level}</p>
                            <div className='d-flex align-items-center'>
                                <span className='fw-semibold'>Rating:</span>
                                <div>
                                    <FaStar className='text-warning ms-1 mb-1'></FaStar>
                                    <span className='ms-2 fw-semibold'>{rating}</span>
                                </div>
                            </div>
                            <p className='fw-semibold text-warning'>Price: ${price}</p>
                            <Button variant="primary">Purchase Now</Button>
                        </div>
                        <div className='text-center'>
                            <Card.Img className='m-2' style={{ width: '200px', height: '150px' }} src={thumbnail_url} />
                        </div>
                    </div>

                </Card.Body>
            </Card>
        </div>
    );
};

export default CheckOut;