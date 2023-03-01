import styled from "styled-components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { useRouter } from "next/router";

//components 
import Container  from "react-bootstrap/Container";
import Row  from "react-bootstrap/Row";
import Col  from "react-bootstrap/Col";
import BasicCard from "../sub-components/Card";

//Styles 

const ImageWrapper = styled.div`
    width: 100%;
    height: 180px;
    overflow: hidden;
`;


const JustInStoriesSection = (props) => {

    // Pull stories from props
    const { stories }: {stories: any[]} = props;

    // Get router
    const router = useRouter();

    return (
        <Container>
            <Row>
                {stories.map((story) => (
                    <Col  md={4} sm={12} key={story.slug}>
                       
                       <BasicCard
                        imgSrc={`${story.storyPhoto.url}`}
                        cardTitle={story.storyTitle}
                        cardCopy={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                        buttonCopy={"Read Story"}
                        onClick={() => router.push(`/story/${story.slug}`)}
                    />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

// {/* <h2>{story.storyTitle}</h2>
//                         {documentToReactComponents(story.storyText.json)}
//                         <ImageWrapper>
//                             <Image
//                                 src={`${story.storyPhoto.url}`}
//                                 alt={story.storyPhoto.title}
//                                 width={100}
//                                 height={100}
//                             />
//                         </ImageWrapper> */}



export default JustInStoriesSection;
