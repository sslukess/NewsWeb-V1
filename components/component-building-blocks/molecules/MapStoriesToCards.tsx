import { BasicCard } from "../atoms/AtomComponentIndex";
import { Col, Row, Container } from "react-bootstrap";
import { NormalisedStory } from "../../../types/index.d";

// === Types and Interfaces ===

interface MapStoriesToCardsProps {
    stories: NormalisedStory[],
    md?: number,
    sm?: number
}

const MapStoriesToCards = ({stories, md = 4, sm = 12}: MapStoriesToCardsProps) => {

    return (
        <>
            <Container>
                <Row>
                    {stories.map((story) => {
                        return (<Col
                            md={md}
                            sm={sm}
                            key={story.slug}>
                                
                            <BasicCard
                                imgSrc={`${story.storyPhoto.url}`}
                                cardTitle={story.storyTitle}
                                cardCopy={story.storySummary}
                                buttonCopy={"Read Story"}
                                link={`/story/${story.slug}`}
                            />
                        </Col>)
                    })}
                </Row>
            </Container>
        </>)
};

export default MapStoriesToCards;