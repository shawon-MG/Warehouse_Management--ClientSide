import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.config';

const SignIn = () => {

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [register, setRegister] = useState('');
    const [error, setError] = useState('');

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    };
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    };
    const handleRegistration = event => {
        setRegister(event.target.checked);
    };

    const handleSubmit = async (e) => {
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
        }
        await sendEmailVerification();
        Window.alert('Varify Your Email Address');

    };

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








// import React, { useState } from 'react';
// import { Button, Form } from 'react-bootstrap';
// import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
// import { auth } from '../../firebase.config';
// import { useLocation, useNavigate } from 'react-router-dom';

// const EmailSignIn = () => {

//     const [signInWithGoogle] = useSignInWithGoogle(auth);
//     const navigate = useNavigate();
//     const location = useLocation();
//     const from = location?.state?.from?.pathname || '/';
//     const handleGoogleSignIn = () => {
//         signInWithGoogle()
//             .then(() => {
//                 navigate(from, { replace: true })
//             })
//     };

//     const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [register, setRegister] = useState('');
//     const [error, setError] = useState('');

//     const handleEmailBlur = e => {
//         setEmail(e.target.value);
//     };
//     const handlePasswordBlur = e => {
//         setPassword(e.target.value);
//     };
//     const handleCreateAccount = e => {
//         e.preventDefault();
//         if (password.length < 6) {
//             setError('Password must be more than 6 characters')
//             return;
//         }
//         createUserWithEmailAndPassword(email, password)
//             .then(() => {
//                 navigate(from, { replace: true })
//             });
//     };

//     return (
//         <div>
//             {/* <div className="registration w-50 mx-auto">
//                 <h2 className='bg-secondary text-white p-2 mt-4'> Please Register First</h2>
//                 <Form >
//                     <Form.Group onBlur={handleEmailBlur} className="mb-3" controlId="formBasicEmail">
//                         <Form.Control type="email" placeholder="Enter Your Email" required />
//                     </Form.Group>

//                     <Form.Group onBlur={handlePasswordBlur} className="mb-3" controlId="formBasicPassword">
//                         <Form.Control type="password" placeholder="Enter Your Password" required />
//                     </Form.Group>

//                     <p className='text-danger'> {error} </p>

//                     <Form.Group className="mb-3 " controlId="formBasicCheckbox">
//                         <Form.Check type="checkbox" label="Registered Already ?" />
//                     </Form.Group>
//                     <Button onSubmit={handleCreateAccount} variant="secondary" type="submit" className='text-white'>
//                         Register
//                     </Button> <br />
//                     <Button variant="link" className='text-dark'>Forget Password?</Button>
//                 </Form>
//             </div> */}

//             <div>
//                 <form>
//                     <input onBlur={handleEmailBlur} type="email" name="" id="" /> <br /> <br />
//                     <input onBlur={handlePasswordBlur} type="password" name="" id="" /><br /> <br />
//                     <input onSubmit={handleCreateAccount} type="submit" value="submit" />
//                 </form>
//             </div>


//             <Button onClick={handleGoogleSignIn} variant="secondary" size="lg" className="mt-4">
//                 Google Sign In
//             </Button>
//         </div>
//     );
// };

// export default EmailSignIn;
