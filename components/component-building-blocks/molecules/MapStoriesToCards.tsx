'use client'

import { BasicCard } from "../atoms/AtomComponentIndex";
import { Col, Row, Container } from "react-bootstrap";
import { NormalisedStory } from "../../../types/index.d";

import { Suspense } from "react";

// === Types and Interfaces ===

interface MapStoriesToCardsProps {
    stories: NormalisedStory[],
    md?: number,
    sm?: number
}

// loading component
const Loading = () => <div>loading...</div>; 

const MapStoriesToCards = ({stories, md = 8, sm = 12}: MapStoriesToCardsProps) => {

    return (
        <Suspense fallback={<Loading />}>
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
                                date={story.storyDate}
                                author={story.author}
                                link={`/story/${story.slug}`}
                            />
                        </Col>)
                    })}
                </Row>
            </Container>
            </Suspense>
        )
};

export default MapStoriesToCards;