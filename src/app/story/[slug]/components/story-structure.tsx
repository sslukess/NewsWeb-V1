'use client';

import { Suspense } from 'react';
import styled from 'styled-components'
import { Col, Row, Container } from "react-bootstrap";
import Image from 'next/image';

import { breakpoint, breakpointSizes } from '../../../../styling/style-mix-ins/CssBreakpoints';
import { ReactNode } from 'react';

// Styles 
const StoryContainer = styled(Container)`

    display: flex;

    padding: 1rem;
    ${breakpoint.up(breakpointSizes.lg)`
    padding: 3rem 6rem;
    `}
`

const StoryImage = styled(Image)`
    width: 100%;
    object-fit: cover;
    border-radius: 3px;
`
const StoryImageWrapper = styled.div`
    position: relative !important;
    margin: 15px 0;

    // height for mobile and desktop 

    ${breakpoint.up(breakpointSizes.lg)`
    height: 500px; 
    width: 90%;
    `}

    ${breakpoint.down(breakpointSizes.lg)`
    height: 300px;
    width: 100%;
    `}
   
`

const StoryHeading = styled.h1`
`

const StoryByLine = styled.p`
    font-style: italic;
    font-size: 0.8rem;
`

const StoryText = styled.div`

`

// Types

interface StoryPageStructureProps {
    storyTitle: string,
    storyBody: ReactNode,
    storyPhotoURL: string,
    author: string,
    storyDate: string,
    storyPhotoName: string
}

function StoryPageStructure(props: StoryPageStructureProps) {

    const { storyTitle, storyBody, storyPhotoURL, author, storyDate, storyPhotoName } = props;

    return (
        <StoryContainer fluid>
            <Row>
                <Col lg={8}>

                    <StoryHeading>{storyTitle}</StoryHeading>
                    <Suspense fallback={<div>LOADING</div>}>
                        <StoryImageWrapper>
                            <StoryImage src={storyPhotoURL}
                                layout={'fill'}
                                alt={storyPhotoName} />
                        </StoryImageWrapper>
                    </Suspense>

                    <StoryByLine>{storyDate} {author ? " - " + author : null}</StoryByLine>

                    <StoryText>{storyBody}</StoryText>
                </Col>

                <Col>
                    <></>
                    {/* Unused Col currently */}
                </Col>
            </Row>
        </StoryContainer>
    )
}

export default StoryPageStructure;