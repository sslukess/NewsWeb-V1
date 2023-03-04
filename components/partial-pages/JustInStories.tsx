import styled from "styled-components";

// Types
import { NormalisedStory } from "../../types/index.d";

//components 
import Container  from "react-bootstrap/Container";
import Row  from "react-bootstrap/Row";
import Col  from "react-bootstrap/Col";
import BasicCard from "../sub-components/Card";

//Styles 
const ImageWrapper = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
`;


const JustInStoriesSection = (props) => {

    // Pull stories from props
    const { stories }: {stories: NormalisedStory[]} = props;

    return (
        <Container>
            <Row>
                {stories.map((story) => (
                    <Col  md={4} sm={12} key={story.slug}>
                       
                       <BasicCard
                        imgSrc={`${story.storyPhoto.url}`}
                        cardTitle={story.storyTitle}
                        cardCopy={<>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</>}
                        buttonCopy={"Read Story"}
                        link={`/story/${story.slug}`}
                    />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default JustInStoriesSection;
