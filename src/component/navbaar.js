import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function NavScrollExample() {
    return (<>
        <Navbar expand="lg" className="bg-dark text-white">
            <Container fluid>
                <Navbar.Brand href="#" className="text-white">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className="text-white">Product</Nav.Link>
                        <Nav.Link href="#action2" className="text-white">Marketplace</Nav.Link>
                        <Nav.Link href="#action3" className="text-white">learn</Nav.Link>

                        <NavDropdown className="text-white" title="Resources" >
                            <Nav.Link href="#action1" className="text-black">Community</Nav.Link>
                            <Nav.Link href="#action2" className="text-black">Ebooks</Nav.Link>
                            <Nav.Link href="#action3" className="text-black">Forum</Nav.Link>
                            <Nav.Link href="#action4" className="text-black">Blog</Nav.Link>
                            <Nav.Link href="#action4" className="text-black">Support</Nav.Link>

                        </NavDropdown>

                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success text-white">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </>
    );
}

export default NavScrollExample;