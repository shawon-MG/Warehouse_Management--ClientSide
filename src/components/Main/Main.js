import { signOut } from 'firebase/auth';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.config';

const Main = () => {

    const [user] = useAuthState(auth);

    return (

        <nav className="navbar navbar-dark bg-dark p-3 mb-2 mt-0 rounded d-flex justify-content-center">
            <Link className='pe-5 text-white fs-3 text-decoration-none' to='/'> Electronic Items Warehouse</Link>
            <Link className='pe-4 text-white fs-5 text-decoration-none' to='/manage-item'> Manage Item</Link>
            <Link className='pe-4 text-white fs-5 text-decoration-none' to='/add-item'> Add Item</Link>
            <Link className='pe-4 text-white fs-5 text-decoration-none' to='/my-item'> My Item</Link>
            <Link className='pe-4 text-white fs-5 text-decoration-none' to='/blogs'> Blogs</Link>

            {
                user?.uid
                    ?
                    <Button onClick={() => signOut(auth)} variant="secondary" className='text-white me-3'> Sign Out</Button>
                    :
                    <Link className='bg-secondary text-white p-2 rounded fs-5 text-decoration-none' to='/signIn'> Sign In</Link>


            }
            {
                user?.uid
                    ?
                    <h5 className='text-white mt-2 ps-2'> Hi, <span className='bg-white text-dark p-1 me-1 rounded'> {user.displayName} </span></h5>
                    :
                    <h5 className='text-white mt-2 ps-2 fs-5'> Please, sign in</h5>

            }
        </nav>


    );
};

export default Main;