import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components';
import Image from 'next/image';

// get the image from the public folder
import TLB_logo from '../../public/logo.png';


// === STYLES ===

// Rounded Image 
const RoundedImage = styled(Image)`
    border-radius: 50%;
`;

// styled Navbar
const StyledNavbar = styled(Navbar)`
    background-color: ${({ theme }) => theme.colors.primary};
`;

const StyledNav = styled(Nav)`


`;

const StyledNavLink = styled(Nav.Link)`
    color: ${({ theme }) => theme.text.colors.primary};
`;

const StyledNavDropdown = styled(NavDropdown)`
    a {
        color: ${({ theme }) => theme.text.colors.primary};
    }
`;

function SiteNavBar() {
    return (
        <StyledNavbar expand="lg">
            <Container>
                <Navbar.Brand href="#home"><RoundedImage height={80} src={TLB_logo} alt="thelogo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <StyledNav>
                        <StyledNavLink href="/">Home</StyledNavLink>
                        <StyledNavLink href="#link">Latest News</StyledNavLink>
                        <StyledNavDropdown title="Catagories" id="basic-nav-dropdown">
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
                            <NavDropdown.Item href="https://thelocalbulletin.news">
                                Print Versions
                            </NavDropdown.Item>
                        </StyledNavDropdown>
                    </StyledNav>
                </Navbar.Collapse>
            </Container>
        </StyledNavbar>
    );
}

export default SiteNavBar;