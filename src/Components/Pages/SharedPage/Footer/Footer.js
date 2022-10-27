import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <div className="bg-primary mb-0">
            <footer className="py-3 my-4 mb-0">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className='nav-item'><Link className='fw-semibold mx-4 text-decoration-none text-light' to='/'>Home</Link></li>
                    <li className='nav-item'><Link className='fw-semibold me-4 text-decoration-none text-light' to='/allCourses'>Courses</Link></li>
                    <li className='nav-item'><Link className='fw-semibold me-4 text-decoration-none text-light' to='/faq'>FAQ</Link></li>
                    <li className='nav-item'><Link className='fw-semibold me-4 text-decoration-none text-light' to='/blog'>Blog</Link></li>
                </ul>
                <p className="text-center text-light me-2">&copy; 2023 Company, Computer Science Academy</p>
            </footer>
        </div>


    );
};

export default Footer;