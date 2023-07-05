


'use client'

import styled from 'styled-components';
import theme from '../../styling/CSS/theme/theme';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Suspense } from 'react';
import Image from 'next/image'

import mapRawResponseToStoryObject from '../../graphql/data-mapping/StoryDataMapping';
import { NormalisedStory } from '../../types/index.d';

// -- COMPONENTS --
const StoryContainer = styled(Container)`
    width: 100%;
    height: 400px;
    background-color: ${theme.colors.grey}
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

    const { storyTitle, storySummary, storyPhoto, author, storyDate } = cleanStory;

    return (
        <Suspense fallback={<div>... Loading</div>}>
            <StoryContainer>
                <Row>
                    <Col md={6} sm>
                        <StoryHeading>{storyTitle}</StoryHeading>
                        <StoryByLine>{storyDate} - {author}</StoryByLine>
                        <StoryText>{storySummary}</StoryText>
                    </Col>

                    <Col xs={{ order: 'first' }} sm={{ order: 'last' }}>
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