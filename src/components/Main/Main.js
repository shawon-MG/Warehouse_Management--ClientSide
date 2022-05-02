import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Main = () => {
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
                        <Navbar.Brand className='me-5' href="signin-signout">Sign In</Navbar.Brand>
                    </Nav>
                </Container>
            </Navbar>

        </div >
    );
};

export default Main;