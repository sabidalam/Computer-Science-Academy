import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/favicon.png';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Button, Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useState } from 'react';
import { useEffect } from 'react';
import './Header.css';

const Headers = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);

    const { user, logOut } = useContext(AuthContext);
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {user?.displayName}
        </Tooltip>
    )
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    };
    return (
        <Navbar className='navbar' collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand className='fs-6'>
                    <Link className='text-decoration-none' to='/'>
                        <div className='d-flex'>
                            <img src={logo} alt="" style={{ width: '50px' }} />
                            <p className='ms-1 my-0 fw-semibold text-info'>Computer Science <br />Academy</p>
                        </div>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle className='bg-primary' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-md-5 me-auto">
                        <Link className='fw-semibold me-4 text-decoration-none text-primary' to='/'>Home</Link>
                        <Link className='fw-semibold me-4 text-decoration-none text-primary' to='/allCourses'>Courses</Link>
                        <Link className='fw-semibold me-4 text-decoration-none text-primary' to='/faq'>FAQ</Link>
                        <Link className='fw-semibold me-4 text-decoration-none text-primary' to='/blog'>Blog</Link>
                    </Nav>

                    <Nav className='mb-1'>
                        {
                            user?.uid ?
                                <>
                                    <OverlayTrigger
                                        placement="bottom"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}
                                    >
                                        <button className='border-0 bg-primary'>
                                            {
                                                user?.photoURL ?
                                                    <Image
                                                        roundedCircle
                                                        src={user?.photoURL}
                                                        style={{ height: '30px' }}>
                                                    </Image>
                                                    :
                                                    <FaUser className='mb-1'></FaUser>
                                            }
                                        </button>
                                    </OverlayTrigger>
                                    <Button onClick={handleLogout} className='ms-2' variant="light" size="sm"><Link className='text-decoration-none' to='/login'>LogOut</Link></Button>

                                </>
                                :
                                <>
                                    <Link className='fw-semibold me-4 text-decoration-none text-primary' to='/login'>Login</Link>
                                    <Link className='fw-semibold me-4 text-decoration-none text-primary' to='/signUp'>SignUp</Link>
                                </>
                        }
                    </Nav>
                    <Nav className='me-4'>
                        <div onClick={toggleTheme} className={`App ${theme}`}>
                            {theme === 'light' ? <BsMoon className='text-dark mb-1' size={20} />
                                :
                                <BsSun className='text-warning mb-1' size={20} />}
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Headers;