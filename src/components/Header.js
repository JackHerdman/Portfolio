import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar bg="light" fixed="top" expand="lg">
            <Navbar.Brand className="text-dark" href="/#home"><h3 style={{ textTransform: "uppercase", letterSpacing: "14px", fontWeight: "500" }}>Jack Herdman</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto navbar-center mt-2 mt-lg-0">
                    <Nav.Link href="/#home">Home</Nav.Link>
                    <Nav.Link href="/#about">About</Nav.Link>
                    <Nav.Link href="/#skills">Skills</Nav.Link>
                    <NavDropdown title="Projects" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/projects/firstconsoleapp">First Console App</NavDropdown.Item>
                        <NavDropdown.Item href="/projects/groupconsoleproject">Group Console Project</NavDropdown.Item>
                        <NavDropdown.Item href="/projects/fishinglicence">Fishing Licence App</NavDropdown.Item>
                        <NavDropdown.Item href="/projects/rsa">RSA app</NavDropdown.Item>
                        <NavDropdown.Item href="/projects/majorproject">Major Project</NavDropdown.Item>

                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/projects/matchgame">Avatar Match Game</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/gallery">Gallery</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}