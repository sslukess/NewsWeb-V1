import { Container, Form, InputGroup } from 'react-bootstrap';
import styled from 'styled-components';


// placeholder for tags/navs 
const tags = [
    "Just In",
    "Local",
    "Global",
    "Gardening",
    "Politics",
    "Pets",
    "Schools",
];

// === STYLES ===

// Header container 

const HeaderContainer = styled(Container)`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.text.colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

// Header element 
const HeaderElement = styled.div`
    padding: 10px;
`;

// Logo wrapper 
const LogoWrapper = styled.div`
    // padding: 1rem;
    width: 20em;
`;

// logo img element 
const LogoImg = styled.img`
    width: 100%;
    height: auto
`;

function SiteHeaderBar(props) {

    return (
        <HeaderContainer fluid>
            <HeaderElement>
                <LogoWrapper>
                    <LogoImg src="/slim-logo.png" alt="logo" />
                </LogoWrapper>
            </HeaderElement>
            <HeaderElement>
                <Form>
                    <InputGroup>
                        {/* <InputGroup.Text>search</InputGroup.Text> */}
                        <Form.Control type="text" placeholder='search' />
                    </InputGroup>
                </Form>
            </HeaderElement>
        </HeaderContainer>
    )

}

// Nav styles
const CatagoryNavBarContainer = styled(Container)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
    border-bottom: 10px solid ${({ theme }) => theme.colors.primary};
`;


// story nav bar tag 
const CatagoryNavBarStoryTag = styled.div`
    padding: 5px;
    margin: 5px;
    text-align: center;
`;

function StoryCatagoryNavBar(props) {

    return (

        <CatagoryNavBarContainer fluid>
            {tags.map((tag) => (
                <CatagoryNavBarStoryTag>{tag}</CatagoryNavBarStoryTag>
            ))}
        </CatagoryNavBarContainer>
    )
}

function SiteHeader() {
    return (
        <>
            <SiteHeaderBar />
            <StoryCatagoryNavBar />
        </>
    )
}

export default SiteHeader;