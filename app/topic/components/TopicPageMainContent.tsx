'use client'

// Types
import { NormalisedStory } from "../../../types/index.d";

//components 
import { MapStoriesToCards } from '../../../components/component-building-blocks/ComponentBuildingBlockIndex';
import Container from 'react-bootstrap/Container';

const TopicPageMainContent = (props) => {

    // Pull stories from props
    const { stories }: { stories: NormalisedStory[] } = props;
    const { pageHeading } = props;

    return (

        <>
            <Container>
                <h1>{pageHeading}</h1>
            </Container>

            <MapStoriesToCards stories={stories} />
        </>
    );
};

export default TopicPageMainContent;
