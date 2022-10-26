import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { _id, name, rating, thumbnail_url, level } = course;
    return (
        <div>
            <Card className='mb-5 mx-auto' style={{ width: '90%' }}>
                <div className='d-md-flex align-items-center'>
                    <div className='text-center'>
                        <Card.Img className='m-2' style={{ width: '200px', height: '150px' }} src={thumbnail_url} />
                    </div>
                    <div>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                <h6 className='mt-2'>Level: {level}</h6>
                                <div className='d-flex align-items-center'>
                                    <FaStar className='text-warning'></FaStar>
                                    <span className='ms-2 fw-semibold'>{rating}</span>
                                </div>
                            </Card.Text>
                            <Link className='text-decoration-none' to={`/course/${_id}`}>Show Details</Link>
                        </Card.Body>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default CourseCard;