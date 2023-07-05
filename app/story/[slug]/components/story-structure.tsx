'use client';

import styled from 'styled-components'
import { Col, Row, Container } from "react-bootstrap";

// Styles 
const StoryContainer = styled(Container)`
    padding: 3rem;    
    display: flex;
`

const StoryImage = styled.img`
    margin: 5px;
    width: 100%;
`

const StoryHeading = styled.h1`
`

const StoryByLine = styled.p`
    font-style: italic;
    font-size: 0.8rem;
`

const StoryText = styled.div`

`

function StoryPageStructure(props) {

    const { storyTitle, storyBody, storyPhotoURL, author, storyDate } = props;

    return (
        <StoryContainer fluid>
            <Row>
                <Col md={8} sm>
                    <StoryHeading>{storyTitle}</StoryHeading>
                    <StoryByLine>{storyDate} - {author}</StoryByLine>
                    <StoryText>{storyBody}</StoryText>
                </Col>

                <Col xs={{order: 'first'}} sm={{order: 'last'}}>
                    <StoryImage src={storyPhotoURL} />
                </Col>
            </Row>
        </StoryContainer>
    )
}

export default StoryPageStructure;