import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components';

// styled Navbar
const StyledNavbar = styled(Navbar)`
    background-color: ${({ theme }) => theme.colors.primary};
`;

function Navbar() {
    return (
        <StyledNavbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">TLB V1</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#link">Latest News</Nav.Link>
                        <NavDropdown title="Catagories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Community
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Polictics
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Gardening
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Print Versions
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </StyledNavbar>
    );
}

export default Navbar;