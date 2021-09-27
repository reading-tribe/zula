import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import {
    LinkContainer
} from "react-router-bootstrap";

export default function ZulaNav(props) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <LinkContainer to="/"><Navbar.Brand>Zula</Navbar.Brand></LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/account"><Nav.Link>Account</Nav.Link></LinkContainer>
                        <LinkContainer to="/books"><Nav.Link>Books</Nav.Link></LinkContainer>
                    </Nav>
                    <Nav>
                        <Navbar.Brand>The Reading Tribe</Navbar.Brand>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

/*
* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to="" component={HomeLink} />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="" component={BooksLink} />
                        <Link to="" component={AccountLink} />
                    </Nav>
                    <Nav>
                        <Navbar.Brand>The Reading Tribe</Navbar.Brand>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
* */