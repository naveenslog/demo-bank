import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import "./styles.css"

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">
                <img
                    src="https://uploads-ssl.webflow.com/645e460a3fe815e7de3dc6de/645e4a1b562d1f3053154a13_logo-with-title.svg" // Replace with your logo path
                    width="200"
                    height="30"
                    className="d-inline-block align-top"
                    alt="MockBank Logo"
                />
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent: "end", marginRight: 32}}>
                <Nav className='ml-auto'>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">
                        <Button variant="outline-success">Sign Up</Button>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
