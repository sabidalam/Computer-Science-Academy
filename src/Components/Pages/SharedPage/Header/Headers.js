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
import ToggleMode from '../../../ToggleMode/ToggleMode';


const Headers = () => {
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

    }
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
                        <Nav className='me-4'>
                            <ToggleMode></ToggleMode>
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
                                        <Link className='fw-semibold me-4 text-decoration-none text-light' to='/login'>Login</Link>
                                        <Link className='fw-semibold me-4 text-decoration-none text-light' to='/signUp'>SignUp</Link>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Headers;