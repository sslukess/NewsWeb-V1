'use client'

import { Container, Form, InputGroup } from 'react-bootstrap';
import styled from 'styled-components';
import useScreenSize from '../../utils/custom-hooks/useScreenSize';
import StoryTopicNavBar from './SiteStoryTopicNavBar';
import theme from '../../styling/CSS/theme/theme';
import { useRouter } from 'next/navigation'
import { SearchBar } from '@/components/component-building-blocks/ComponentBuildingBlockIndex';
import { breakpointSizes, breakpoint } from '@/styling/style-mix-ins/CssBreakpoints';
import getMastheadName from '@/utils/app-utils/getMastheadName';
import Logo from './Logo';

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
    border-radius: 3px 3px 0 0;
`;

// Header element 
const SearchWrapper = styled.div`
    padding: 10px;
    flex: 0 0 20em;
    display: flex;
    justify-content: end;
`;

// Logo wrapper 
const LogoWrapper = styled.div`
    flex: 0 1 auto;
    padding: 10px;

    ${breakpoint.down(breakpointSizes.sm)`
    // flex-basis: 16em;
    // padding: 23px;
    `}}
`;


function SiteHeaderBar() {

    const screenSize = useScreenSize();
    const router = useRouter();
    const masthead = getMastheadName();

    return (
        <HeaderContainer fluid>
            <LogoWrapper onClick={() => router.push('/')} >
                {/* <LogoImg onClick={() => router.push('/')} src="/greenHarbourLogo.png" alt="logo" /> */}
                <Logo masthead={masthead} />
            </LogoWrapper>

            {/* Search bar - should hide for tablet/mobile */}
            {
                !screenSize.isTabletOrMobile &&
                <SearchWrapper>
                    <SearchBar />
                </SearchWrapper>
            }

        </HeaderContainer>
    )

}

function SiteHeader({ topics }) {

    const screenSize = useScreenSize();

    return (
        <>
            <SiteHeaderBar />

            {/* Story Tags - should hide at mobile sizes */}
            {
                !screenSize.isTabletOrMobile && <StoryTopicNavBar topics={topics} />
            }
        </>
    )
}

export default SiteHeader;