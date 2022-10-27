import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import Headers from '../../SharedPage/Header/Headers';
import Footer from '../../SharedPage/Footer/Footer';


const SignUp = () => {
    const [error, setError] = useState('');
    const { createUser, providerGoogleLogin, updateUserProfile, providerGithubLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.url.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                handleUpdateUser(name, photoURL);
                navigate('/');
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    const handleUpdateUser = (name, photoURL) => {
        const profile = { displayName: name, photoURL: photoURL }
        updateUserProfile(profile)
            .then(() => {
            }).catch(error => console.error(error));
    }

    const handleGoogleSignIn = () => {
        providerGoogleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate('/');
            })
            .catch(error => {
                console.error(error)
                setError(error.massage)
            })
    }

    const handleGithubSignIn = () => {
        providerGithubLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate('/');
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
                <h3 className='my-4'>Please SignUp!!</h3>
                <Form onSubmit={handleSignUp} >
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" name='name' placeholder="Enter Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter Email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='url' placeholder="photo url" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='w-100'>
                        SignUp
                    </Button>
                    <Form.Text className='text-danger'>
                        {error}
                    </Form.Text>
                    <p className='my-2 text-center'><small>Already have an account? <Link to='/login'>Login</Link></small></p>
                </Form>
                <div className='d-flex justify-content-evenly'>
                    <hr className='w-25' />
                    <span>Or</span>
                    <hr className='w-25' />
                </div>
                <ButtonGroup vertical className='w-100'>
                    <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"> < FcGoogle className='fs-4 mb-1'></FcGoogle> SignIn via Google</Button>
                    <Button onClick={handleGithubSignIn} variant="outline-dark"> <FaGithub className='fs-4 mb-1'></FaGithub> SignIn via Github</Button>
                </ButtonGroup>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SignUp;