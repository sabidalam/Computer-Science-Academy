import React from 'react';
import Footer from '../SharedPage/Footer/Footer';
import Headers from '../SharedPage/Header/Headers';
import image from '../../../assets/image.webp';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <div className=' mb-4'>
                <div className='d-md-flex justify-content-center align-items-center container py-5'>
                    <div className='px-4'>
                        <h1 className='text-warning'>Let's Grow Your Skills<br />Level Up With <br /> Computer Science Academy</h1>
                        <p className='text-secondary'>Computer Science Academy is an online learning site that provides exclusive courses with best instructors.<br />Just Enroll, Explore & Learn.</p>
                        <Link to='/allCourses'>
                            <Button className='py-2' variant='outline-primary'>View all Courses</Button>
                        </Link>
                    </div>
                    <div className='text-center mt-4 mx-3'>
                        <img className='img-fluid w-100 rounded' src={image} alt="" />
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>

    );
};

export default Home;