'use client'

import { BasicCard } from "../atoms/AtomComponentIndex";
import { Col, Row, Container } from "react-bootstrap";
import { NormalisedStory } from "../../../types/index.d";
import { breakpoint, breakpointSizes } from "../../../styling/style-mix-ins/CssBreakpoints";

import { Suspense } from "react";
import styled from "styled-components";

// === Types and Interfaces ===

interface MapStoriesToCardsProps {
    stories: NormalisedStory[],
}

// styled container with padding and margin for wrapper 

const CardRowWrapper = styled.section`
    ${breakpoint.up(breakpointSizes.lg)`
    padding: 12px 60px;
`}
`;

// loading component
const Loading = () => <div>loading...</div>; 

const MapStoriesToCards = ({ stories }: MapStoriesToCardsProps) => {

    return (
        <Suspense fallback={<Loading />}>
            <CardRowWrapper fluid>
                    {stories.map((story) => (
                                
                            <BasicCard
                                key={story.slug}
                                imgSrc={`${story.storyPhoto.url}`}
                                cardTitle={story.storyTitle}
                                cardCopy={story.storySummary}
                                buttonCopy={"Read Story"}
                                date={story.storyDate}
                                author={story.author}
                                link={`/story/${story.slug}`}
                            />))}
            </CardRowWrapper>
            </Suspense>
        )
};

export default MapStoriesToCards;