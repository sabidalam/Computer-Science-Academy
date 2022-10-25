import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/favicon.png';

const Headers = () => {
    return (
        <div className='mb-5'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand className='fs-6'>
                        <Link className='text-decoration-none' to='/'>
                            <div className='d-flex'>
                                <img src={logo} alt="" style={{ width: '50px' }} />
                                <p className='ms-1 my-0 fw-semibold text-primary'>Computer Science <br />Academy</p>
                            </div>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-5 me-auto">
                            <Link className='fw-semibold me-4 text-decoration-none text-secondary' to='/courses'>Courses</Link>
                            <Link className='fw-semibold me-4 text-decoration-none text-secondary' to='/faq'>FAQ</Link>
                            <Link className='fw-semibold me-4 text-decoration-none text-secondary' to='/blog'>Blog</Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Headers;