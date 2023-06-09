import { Container, Form, InputGroup } from 'react-bootstrap';
import styled from 'styled-components';
import useScreenSize from '../../utils/custom-hooks/useScreenSize';
import StoryCatagoryNavBar from './SiteStoryTopicNavBar';

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

function SiteHeaderBar() {

    const screenSize = useScreenSize();

    return (
        <HeaderContainer fluid>
            <HeaderElement>
                <LogoWrapper>
                    <LogoImg src="/slim-logo.png" alt="logo" />
                </LogoWrapper>
            </HeaderElement>

            {/* Search bar - should hide for tablet/mobile */}
            {
                !screenSize.isTabletOrMobile && 
            <HeaderElement>
                <Form>
                    <InputGroup>
                        {/* <InputGroup.Text>search</InputGroup.Text> */}
                        <Form.Control type="text" placeholder='search' />
                    </InputGroup>
                </Form>
            </HeaderElement>
            }

        </HeaderContainer>
    )

}

function SiteHeader({topics}) {

    const screenSize = useScreenSize();

    return (
        <>
            <SiteHeaderBar />

            {/* Story Tags - should hide at mobile sizes */}
            {
                !screenSize.isTabletOrMobile && <StoryCatagoryNavBar topics={topics}/>
            }
        </>
    )
}

export default SiteHeader;