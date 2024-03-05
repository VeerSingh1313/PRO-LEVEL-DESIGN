import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Nav2() {
    return (
        <Container>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Nav.Link href="#home">SERVICES</Nav.Link><br />
                    <Nav.Link href="#link">PROJECTS</Nav.Link><br />
                    <Nav.Link href="#link">CONTACT</Nav.Link><br />
                </Container>
            </Navbar>
        </Container>
    );
}

export default Nav2;