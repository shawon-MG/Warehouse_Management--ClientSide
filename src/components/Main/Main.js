import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

import app from '../../firebase.config';
import { useState } from 'react';

import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';


const auth = getAuth(app);

const Main = () => {

    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch(error => {
                console.log('Error', error);
            })
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                setUser({})
            })
    };

    return (
        <div className='mb-4'>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Electronic Items Warehouse </Navbar.Brand>
                    <Nav className="mx-auto p-2">

                        <Navbar.Brand className='me-4' href="/blogs">Blogs</Navbar.Brand>

                        {
                            user.email
                                ?
                                <>

                                    <Navbar.Brand className='me-4' href="manage-item">Manage Item</Navbar.Brand>
                                    <Navbar.Brand className='me-4' href="add-item">Add Item</Navbar.Brand>
                                    <Navbar.Brand className='me-4' href="my-item">My Item</Navbar.Brand>

                                </>
                                :
                                <h5 className='text-white mt-2 me-4 ps-2'> You've to log in to access more </h5>
                        }


                        {
                            user.email
                                ?
                                <Button variant="secondary" className='text-white' onClick={handleSignOut}>Sign Out</Button>
                                :
                                <div>
                                    <Button href="/signIn" variant="secondary" className='text-white me-3' >Log In</Button>

                                    <Button variant="secondary" className='text-white me-3' onClick={handleGoogleSignIn}>Google</Button>
                                </div>

                        }
                        {
                            user.email
                                ?
                                <h5 className='text-white mt-2 ps-2'> Hi, <span className='bg-white text-dark p-1 me-1 rounded'> {user.displayName} </span></h5>
                                :
                                <h5 className='text-white mt-2 ps-2'> Please, log in</h5>

                        }

                    </Nav>
                </Container>
            </Navbar>

        </div >
    );
};

export default Main;