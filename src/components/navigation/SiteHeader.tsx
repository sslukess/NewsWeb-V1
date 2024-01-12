'use client'

import { Container } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import useScreenSize from '../../utils/custom-hooks/useScreenSize';
import StoryTopicNavBar from './SiteStoryTopicNavBar';
import theme from '../../styling/CSS/theme/theme';
import { useRouter } from 'next/navigation'
import getMastheadName from '@/utils/app-utils/getMastheadName';
import Logo from './Logo';
import { breakpoint, breakpointSizes } from "@/styling/style-mix-ins/CssBreakpoints";

// === STYLES ===

// Header container

const wiggle = keyframes`
    0% { transform: scale(1); }
    100% { transform: scale(1.1); }
`

const HeaderContainer = styled(Container)`
    background-color: ${theme.colors.primary};
    color: ${theme.text.colors.primary};
    display: flex;
    justify-content: ${(props) => props.leftAlign ? "start" : "center"};
    align-items: start;
    padding: 0;
    border-bottom: 1px solid ${theme.colors.secondary};
    border-radius: 3px 3px 0 0;
`;

// Logo wrapper 
const LogoWrapper = styled.div`
    flex: 0 1 auto;
    padding: 10px;
    cursor: pointer;

    &:hover {
        animation: ${wiggle} 0.3s;
        animation-fill-mode: forwards;
        text-decoration: italic;
    }
`;


function SiteHeaderBar() {

    const screenSize = useScreenSize();
    const router = useRouter();
    const masthead = getMastheadName();

    return (
        <HeaderContainer fluid leftAlign={screenSize.isTinyMobile ? true : false}>
            <LogoWrapper onClick={() => router.push('/')} >
                <Logo masthead={masthead} />
            </LogoWrapper>
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