import styled from "styled-components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

//components 
import  Container  from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";

//Styles 

const ImageWrapper = styled.div`
    width: 100%;
    height: 180px;
    overflow: hidden;
`;


const JustInStoriesSection = (props) => {

    const { stories }: {stories: any[]} = props;

    return (
        <Container>
            <Row>
                {stories.map((story) => (
                    <Col  md={4} sm={12} key={story.slug}>
                        <h2>{story.storyTitle}</h2>
                        {documentToReactComponents(story.storyText.json)}
                        <ImageWrapper>
                            <Image
                                src={`${story.storyPhoto.url}`}
                                alt={story.storyPhoto.title}
                                width={100}
                                height={100}
                            />
                        </ImageWrapper>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default JustInStoriesSection;
