import {
    Nav,
    Navbar,
    Container,
 } from "react-bootstrap";
import {
    LinkContainer
} from "react-router-bootstrap";

export default function ZulaNav() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <LinkContainer to="/"><Navbar.Brand>Zula</Navbar.Brand></LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/account"><Nav.Link><small className="text-muted">(Customer)</small> Accounts</Nav.Link></LinkContainer>
                        <LinkContainer to="/books"><Nav.Link><small className="text-muted">(Customer)</small> Books</Nav.Link></LinkContainer>
                        <LinkContainer to="/new/translation"><Nav.Link><small className="text-muted">(Author)</small> New Translation</Nav.Link></LinkContainer>
                    </Nav>
                    <Nav>
                        <Navbar.Brand>The Reading Tribe</Navbar.Brand>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}