'use client'

import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Spinner } from '@/components/component-building-blocks/atoms/Spinner';
import { Suspense } from 'react';
import Image from 'next/image'
import { StyledLink } from '../../components/component-building-blocks/ComponentBuildingBlockIndex'
import { useRouter } from 'next/navigation'; 
import { getPhotoWithSize } from '@/utils/story-utils/GetPhotoWithSize';
import theme from '@/styling/CSS/theme/theme'

import mapRawResponseToStoryObject from '../../graphql/data-mapping/StoryDataMapping';
import { NormalisedStory } from '../../types/index.d';
import { breakpoint, breakpointSizes } from '../../styling/style-mix-ins/CssBreakpoints';

// -- COMPONENTS --
const StoryContainer = styled(Container)`
min-height: 30vh;
margin: 12px 0;
sizing: border-box;
        
    ${breakpoint.up(breakpointSizes.lg)`
            padding: 12px 60px;
    `}

`;

const StoryImage = styled(Image)`
    object-fit: cover;
    border-radius: 5px;
`

const StoryImageWrapper = styled.div`
    position: relative !important;
    height: 350px;
   
`

const StoryHeading = styled.h1`
    color: ${theme.text.colors.primary}
`

const StoryByLine = styled.p`
    font-style: italic;
    font-size: 0.8rem;
    color: ${theme.text.colors.primary}
`

const StoryText = styled.div`
    color: ${theme.text.colors.primary}
`

const LeadStory = ({ rawStory }) => {

    const cleanStory: NormalisedStory = mapRawResponseToStoryObject(rawStory)

    const { storyTitle, storySummary, storyPhoto, author, storyDate, slug } = cleanStory;

    // add sizing parameters to send to contentful: 
    const resizedImgSrc = getPhotoWithSize(storyPhoto.url, null, 400);

    const router = useRouter();

    return (
        <Suspense fallback={<Spinner />}>
            <StoryContainer fluid>
                <Row>
                    <Col md lg={7}  style={{margin: "6px 0"}}>
                        <StoryHeading><StyledLink href={`story/${slug}`}>{storyTitle}</StyledLink></StoryHeading>
                        <StoryByLine>{storyDate} - {author}</StoryByLine>
                        <StoryText>{storySummary}</StoryText>
                    </Col>

                    <Col xs={{ order: 'first' }} md={{ order: 'last' }} >
                        <Suspense fallback={<Spinner />}>
                            <StoryImageWrapper>
                                    <StoryImage
                                        src={resizedImgSrc}
                                        fill={true}
                                        alt={storyTitle}
                                        onClick={() => router.push(`/story/${slug}`)}
                                    />
                            </StoryImageWrapper>
                        </Suspense>
                    </Col>
                </Row>
            </StoryContainer>
        </Suspense>
    );
};

export default LeadStory;