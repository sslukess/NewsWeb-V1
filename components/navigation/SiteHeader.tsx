import { Container } from 'react-bootstrap';
import styled from 'styled-components';

// placeholder for tags/navs 
const tags = [
    "tag1",
    "tag2",
    "tag3",
    "tag4",
    "tag5",
    "tag6",
    "tag7",
];

// === STYLES ===

// Header container 

const HeaderContainer = styled(Container)`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.text.colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

// Header element 
const HeaderElement = styled.div`
    padding: 1rem;
`;


function SiteHeaderBar(props) {

    return (

        <HeaderContainer fluid>
            <HeaderElement>
                <h1>Logo</h1>
            </HeaderElement>
            <HeaderElement>
                <h1>Nav</h1>
            </HeaderElement>
        </HeaderContainer>

    )

}

// Nav styles
const CatagoryNavBarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
`;

function StoryCatagoryNavBar(props) {

    return (

        <CatagoryNavBarContainer fluid>
            {tags.map((tag) => (
                <div>{tag}</div>
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