'use client'

import { Container, Form, InputGroup } from 'react-bootstrap';
import styled from 'styled-components';
import useScreenSize from '../../utils/custom-hooks/useScreenSize';
import StoryTopicNavBar from './SiteStoryTopicNavBar';
import theme from '../../styling/CSS/theme/theme';
import { useRouter } from 'next/navigation'
import { SearchBar } from '@/components/component-building-blocks/ComponentBuildingBlockIndex';

// === STYLES ===

// Header container

const HeaderContainer = styled(Container)`
    background-color: ${theme.colors.primary};
    color: ${theme.text.colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 0;
    border-bottom: 1px solid ${theme.colors.secondary};
    cursor: pointer;
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
    const router = useRouter(); 

    return (
        <HeaderContainer onClick={() => router.push('/')} fluid>
            <HeaderElement>
                <LogoWrapper>
                    <LogoImg src="/newLogo.png" alt="logo" />
                </LogoWrapper>
            </HeaderElement>

            {/* Search bar - should hide for tablet/mobile */}
            {
                !screenSize.isTabletOrMobile && 
            <HeaderElement>
                <SearchBar />
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
                !screenSize.isTabletOrMobile && <StoryTopicNavBar topics={topics}/>
            }
        </>
    )
}

export default SiteHeader;