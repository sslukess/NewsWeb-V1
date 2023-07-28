'use client'

import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Suspense } from 'react';
import Image from 'next/image'
import { StyledLink } from '../../components/component-building-blocks/ComponentBuildingBlockIndex'

import mapRawResponseToStoryObject from '../../graphql/data-mapping/StoryDataMapping';
import { NormalisedStory } from '../../types/index.d';
import { breakpoint, breakpointSizes } from '../../styling/style-mix-ins/CssBreakpoints';

// -- COMPONENTS --
const StoryContainer = styled(Container)`
        
    ${breakpoint.up(breakpointSizes.lg)`
            padding: 12px 60px;
    `}

`;

const StoryImage = styled(Image)`
    object-fit: contain;
`

const StoryImageWrapper = styled.div`
    position: relative !important;
    height: 300px;
   
`

const StoryHeading = styled.h1`
`

const StoryByLine = styled.p`
    font-style: italic;
    font-size: 0.8rem;
`

const StoryText = styled.div`
`

const LeadStory = ({ rawStory }) => {

    const cleanStory: NormalisedStory = mapRawResponseToStoryObject(rawStory)

    const { storyTitle, storySummary, storyPhoto, author, storyDate, slug } = cleanStory;

    return (
        <Suspense fallback={<div>... Loading</div>}>
            <StoryContainer fluid>
                <Row>
                    <Col md lg={6}>
                        <StoryHeading><StyledLink href={`story/${slug}`}>{storyTitle}</StyledLink></StoryHeading>
                        <StoryByLine>{storyDate} - {author}</StoryByLine>
                        <StoryText>{storySummary}</StoryText>
                    </Col>

                    <Col xs={{ order: 'first' }} md={{ order: 'last' }} >
                        <StoryImageWrapper>
                            <StoryImage
                                src={`${storyPhoto.url}`}
                                fill={true}
                                alt={'XXX'}
                                />
                        </StoryImageWrapper>
                    </Col>
                </Row>
            </StoryContainer>
        </Suspense>
    );
};

export default LeadStory;