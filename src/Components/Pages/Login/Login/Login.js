import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import Headers from '../../SharedPage/Header/Headers';

const Login = () => {
    const [error, setError] = useState('');
    const { signIn, providerLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const provider = new GoogleAuthProvider();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })

    }

    const handleGoogleSignIn = () => {
        providerLogin(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(error.massage)
            })

    }
    return (
        <div>
            <Headers></Headers>
            <div className='w-25 mx-auto container my-5'>
                <h3 className='my-4'>Please Login!!</h3>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    <Button className='form-control' variant="primary" type="submit">
                        Login
                    </Button>
                    <br />
                    <Form.Text className='text-danger'>
                        {error}
                    </Form.Text>
                    <p className='my-2 text-center'><small>New to this Website? Please <Link to='/signUp'>SignUp</Link></small></p>
                </Form>
                <div className='d-flex justify-content-evenly'>
                    <hr className='w-25' />
                    <span>Or</span>
                    <hr className='w-25' />
                </div>
                <ButtonGroup vertical className='w-100'>
                    <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"> < FcGoogle className='fs-4 mb-1'></FcGoogle> Login via Google</Button>
                    <Button variant="outline-dark"> <FaGithub className='fs-4 mb-1'></FaGithub> Login via Github</Button>
                </ButtonGroup>

            </div>
        </div>
    );
};

export default Login;