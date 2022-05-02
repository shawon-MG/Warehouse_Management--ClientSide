import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

import app from '../../firebase.config';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const auth = getAuth(app);

const Main = () => {

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log('Error', error);
            })
    };

    return (
        <div className='mb-4'>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Electronic Items Warehouse</Navbar.Brand>
                    <Nav className="mx-auto p-2">
                        <Navbar.Brand className='me-5' href="manage-item">Manage Item</Navbar.Brand>
                        <Navbar.Brand className='me-5' href="add-item">Add Item</Navbar.Brand>
                        <Navbar.Brand className='me-5' href="my-item">My Item</Navbar.Brand>
                        <Navbar.Brand className='me-5' href="/blogs">Blogs</Navbar.Brand>

                        <Button href="/signIn" variant="secondary" className='text-white me-3' >Log In</Button>

                        <Button variant="secondary" className='text-white' onClick={handleGoogleSignIn}>Google</Button>
                    </Nav>
                </Container>
            </Navbar>

        </div >
    );
};

export default Main;