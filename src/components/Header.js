import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar bg="success" variant="dark">
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-2">E-commerce</NavLink>
                    <Nav className="ml-auto">
                        <NavLink to="/" className="text-decoration-none text-light mx-2">Home</NavLink>
                        <NavLink to="/login" className="text-decoration-none text-light">Login</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header