import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.config';

const SignIn = () => {
    //-------------- react-firebase-hooks--------------
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [register, setRegister] = useState('');
    const [error, setError] = useState('');

    const handleNameBlur = e => {
        user(e.target.value);
    };
    const handleEmailBlur = e => {
        setEmail(e.target.value);
    };
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    };
    const handleRegistration = event => {
        setRegister(event.target.checked);
    };

    // --------Email, Password Sign In---------------//
    const handleSubmit = e => {
        e.preventDefault();
        if (register) {
            if (password.length < 6) {
                setError('Password must be more than 6 characters')
                return;
            }
            signInWithEmailAndPassword(email, password)
                .then(() => {
                    navigate(from, { replace: true })
                });
        }
        else {
            if (password.length < 6) {
                setError('Password Must Be More Than 6 Characters')
                return;
            }
            createUserWithEmailAndPassword(email, password)
                .then(() => {
                    navigate(from, { replace: true })
                });
            sendEmailVerification();
            alert('Sent email');
        }
    };

    // -------------Google Sign In-------------//
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    };

    return (
        <div>
            <div className="registration w-50 mx-auto">
                <h2 className='bg-secondary text-white p-2 mt-4'> Please {register ? 'Sign In' : 'Register'}</h2>
                <Form onSubmit={handleSubmit}>
                    {
                        !register && <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control onBlur={handleNameBlur} type="name" placeholder="Enter Your Name" required />
                        </Form.Group>
                    }

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter Your Email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Enter Your Password" required />
                    </Form.Group>

                    <p className='text-danger'><strong>{error}</strong></p>

                    <Form.Group className="mb-3 " controlId="formBasicCheckbox">
                        <Form.Check onChange={handleRegistration} type="checkbox" label="Registered Already ?" />
                    </Form.Group>

                    <Button variant="secondary" type="submit" className='text-white'>
                        {register ? 'Sign In' : 'Register'}
                    </Button> <br />
                </Form>
            </div>


            <Button onClick={handleGoogleSignIn} variant="secondary" size="lg" className="mt-4">
                Google Sign In
            </Button>
        </div>
    );
};

export default SignIn;
