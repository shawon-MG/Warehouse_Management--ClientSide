// import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
// import { useState } from 'react';
// import { Button, Form } from 'react-bootstrap';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { auth } from '../../firebase.config';
// import useFirebase from '../../hooks/useFirebase';

// const SignIn = () => {

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [register, setRegister] = useState(false);

//     const handleEmailBlur = (event) => {
//         setEmail(event.target.value);
//     }
//     const handlePasswordBlur = (event) => {
//         setPassword(event.target.value);
//     }

//     const handleRegistration = event => {
//         setRegister(event.target.checked);
//     }

//     const emailVarification = () => {
//         sendEmailVerification(auth.currentUser)
//             .then(() => {
//                 console.log('Email Sent');
//             })
//     }

//     const handleSubmit = (event) => {
//         if (register) {
//             signInWithEmailAndPassword(auth, email, password)
//                 .then(result => {
//                     const user = result.user;
//                     console.log(user);
//                 })
//                 .catch(error => {
//                     console.error(error);
//                 })
//         }
//         else {
//             createUserWithEmailAndPassword(auth, email, password)
//                 .then(result => {
//                     const user = result.user;
//                     console.log(user);
//                     emailVarification();
//                 })
//                 .catch(error => {
//                     console.error(error);
//                 })
//         }
//         console.log('SUBMITTED: ', email, password);
//         event.preventDefault();
//     }

//     const handlePasswordReset = () => {
//         sendPasswordResetEmail(auth, email)
//             .then(() => {
//                 console.log('Email Sent');
//             })
//     };

//     const { user, handleGoogleSignIn } = useFirebase();

//     const navigate = useNavigate();
//     const location = useLocation();
//     const from = location?.search?.from?.pathname || '/';

//     if (user) {
//         navigate(from, { replace: true });
//     }

//     const googleSignIn = () => {
//         handleGoogleSignIn()
//             .then(() => {
//                 navigate(from, { replace: true })
//             })
//     };

//     return (
//         <div>
//             <div className="registration w-50 mx-auto">
//                 <h2 className='bg-secondary text-white p-2 mt-4'> Please {register ? 'Log-In' : 'Register'}</h2>
//                 <Form onSubmit={handleSubmit}>
//                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter Your Email" required />
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="formBasicPassword">
//                         <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Enter Your Password" required />
//                     </Form.Group>
//                     <Form.Group className="mb-3 " controlId="formBasicCheckbox">
//                         <Form.Check onChange={handleRegistration} type="checkbox" label="Registered Already ?" />
//                     </Form.Group>
//                     <Button variant="secondary" type="submit" className='text-white'>
//                         {register ? 'Log-In' : 'Register'}
//                     </Button> <br />
//                     <Button onClick={handlePasswordReset} variant="link" className='text-dark'>Forget Password?</Button>
//                 </Form>
//             </div>

//             <Button onClick={googleSignIn} variant="secondary" size="lg" className="mt-4">
//                 Google Sign In
//             </Button>

//         </div>
//     );
// };
// export default SignIn;

import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.config';
import { useLocation, useNavigate } from 'react-router-dom';

const EmailSignIn = () => {

    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }
    return (
        <div>
            <h2>Log In</h2>
            <Button onClick={handleGoogleSignIn} variant="secondary" size="lg" className="mt-4">
                Google Sign In
            </Button>
        </div>
    );
};

export default EmailSignIn;
