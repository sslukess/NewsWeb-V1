'use client'

import styled from 'styled-components';
import { breakpoint, breakpointSizes } from '../../../styling/style-mix-ins/CssBreakpoints';
import theme from '@/styling/CSS/theme/theme';

// Types
import type { NormalisedStory } from "../../../types/index.d";

//components 
import { MapStoriesToCards } from '../../../components/component-building-blocks/ComponentBuildingBlockIndex';
import Container from 'react-bootstrap/Container';

// Styled 

const StyledContainer = styled(Container)`
    
    padding-top: 12px;

    ${breakpoint.up(breakpointSizes.md)`
    padding: 12px 60px 0 60px;
    `}
`;

const StyledHeading = styled.h1`
    text-decoration: underline ${theme.colors.secondary};
    color: ${theme.text.colors.primary};
    font-size: 3rem;
    margin-bottom: 0;
`;

interface Props {
    stories: NormalisedStory[];
    pageHeading: string;
}

const TopicPageMainContent = (props: Props) => {

    // Pull stories from props
    const { stories }: { stories: NormalisedStory[] } = props;
    const { pageHeading } = props;

    const capitalisedHeading = pageHeading.charAt(0).toUpperCase() + pageHeading.slice(1);

    return (

        <>
            <StyledContainer fluid>
                <StyledHeading>{capitalisedHeading}</StyledHeading>
            </StyledContainer>

            <MapStoriesToCards stories={stories} />
        </>
    );
};

export default TopicPageMainContent;
