import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './nav-bar.scss';
import Link from 'react-router-dom';

export default function NavBar() {
    return (
        <Navbar expand="lg" variant="dark" className="navbar">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/">
                        <Nav.Link className="navlink">Home</Nav.Link>
                    </Link>
                    <Nav.Link className="navlink">Tournament Manager</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Link to="/login">
                        <Nav.Link to="/login" className="navlink">Login</Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}