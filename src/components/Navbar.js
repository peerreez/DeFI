import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

const Navigation = ({ account }) => {
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="https://blockstellart.com" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                    DApp
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" style={{ fontSize: '1.2rem' }}>
                        <Nav.Link as={Link} to="/" style={{ color: 'white' }}>Home</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link
                            href={`https://etherscan.io/address/${account}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button nav-button btn-sm mx-2"
                        >
                            <Button variant="outline-light" style={{ fontSize: '1rem' }}>
                                {account.slice(0, 10) + '...' + account.slice(32, 42)}
                            </Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
