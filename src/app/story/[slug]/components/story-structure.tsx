'use client';

import styled from 'styled-components'
import { Col, Row, Container } from "react-bootstrap";
import Image from 'next/image';

import { breakpoint, breakpointSizes } from '../../../../styling/style-mix-ins/CssBreakpoints';

// Styles 
const StoryContainer = styled(Container)`

    display: flex;

    padding: 1rem;
    ${breakpoint.up(breakpointSizes.lg)`
    padding: 3rem 6rem;
    `}
`

const StoryImage = styled(Image)`
    padding: 5px;
    width: 100%;
    object-fit: cover;
`
const StoryImageWrapper = styled.div`
    position: relative !important;
    
    padding: 10px;

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

const HeadingWrapper = styled.div`
    display: flex;
`;

function StoryPageStructure(props) {

    const { storyTitle, storyBody, storyPhotoURL, author, storyDate } = props;

    return (
        <StoryContainer fluid>
            <Row>
                <Col lg={8}>

                    <StoryHeading>{storyTitle}</StoryHeading>

                    <StoryImageWrapper>
                        <StoryImage src={storyPhotoURL}
                            layout={'fill'}
                            alt={'XXX'} />
                    </StoryImageWrapper>

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