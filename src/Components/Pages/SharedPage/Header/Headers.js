import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/favicon.png';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';

const Headers = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='mb-5'>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="primary">
                <Container>
                    <Navbar.Brand className='fs-6'>
                        <Link className='text-decoration-none' to='/'>
                            <div className='d-flex'>
                                <img src={logo} alt="" style={{ width: '50px' }} />
                                <p className='ms-1 my-0 fw-semibold text-light'>Computer Science <br />Academy</p>
                            </div>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-5 me-auto">
                            <Link className='fw-semibold me-4 text-decoration-none text-light' to='/'>Courses</Link>
                            <Link className='fw-semibold me-4 text-decoration-none text-light' to='/faq'>FAQ</Link>
                            <Link className='fw-semibold me-4 text-decoration-none text-light' to='/blog'>Blog</Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets"></Nav.Link>
                            <Nav.Link >
                                {user?.name}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Headers;