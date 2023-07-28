'use client'

import styled from 'styled-components';
import { breakpoint, breakpointSizes } from '../../../styling/style-mix-ins/CssBreakpoints';

// Types
import { NormalisedStory } from "../../../types/index.d";

//components 
import { MapStoriesToCards } from '../../../components/component-building-blocks/ComponentBuildingBlockIndex';
import Container from 'react-bootstrap/Container';

// Styled 

const StyledContainer = styled(Container)`
    ${breakpoint.up(breakpointSizes.lg)`
    padding: 12px 60px;
    `}
`;

const StyledHeading = styled.h1`
    text-decoration: underline;
`;

const TopicPageMainContent = (props) => {

    // Pull stories from props
    const { stories }: { stories: NormalisedStory[] } = props;
    const { pageHeading } = props;

    return (

        <>
            <StyledContainer fluid>
                <StyledHeading>{pageHeading}</StyledHeading>
            </StyledContainer>

            <MapStoriesToCards stories={stories} />
        </>
    );
};

export default TopicPageMainContent;
