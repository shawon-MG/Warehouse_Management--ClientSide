import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Main = () => {
    return (
        <div className='mb-4'>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="mx-auto p-2">
                        <Navbar.Brand className='me-5' href="#home">Manage Item</Navbar.Brand>
                        <Navbar.Brand className='me-5' href="#home">Add Item</Navbar.Brand>
                        <Navbar.Brand className='me-5' href="#home">My Item</Navbar.Brand>
                        <Navbar.Brand className='me-5' href="#home">Blogs</Navbar.Brand>
                        <Navbar.Brand className='me-5' href="#home">Sign In</Navbar.Brand>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Main;