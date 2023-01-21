import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <div className="mb-0 border-top border-info ">
            <footer className="py-3 my-4 mb-0">
                <ul className="nav justify-content-center pb-3 mb-3">
                    <li className='nav-item'><Link className='fw-semibold mx-4 text-decoration-none text-primary' to='/'>Home</Link></li>
                    <li className='nav-item'><Link className='fw-semibold me-4 text-decoration-none text-primary' to='/allCourses'>Courses</Link></li>
                    <li className='nav-item'><Link className='fw-semibold me-4 text-decoration-none text-primary' to='/faq'>FAQ</Link></li>
                    <li className='nav-item'><Link className='fw-semibold me-4 text-decoration-none text-primary' to='/blog'>Blog</Link></li>
                </ul>
                <p className="text-center text-primary me-2">&copy; 2023 Company, Computer Science Academy</p>
            </footer>
        </div>


    );
};

export default Footer;