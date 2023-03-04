
//Compontent Import
import { BasicCard } from '../sub-components/SubComponentIndex';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NormalisedStory } from '../../types/index.d';

const FrontPgLeadStories = ({latestStories}) => {

    return (
        <Container>
            <Row>
            {latestStories.map((story) => (
                    <Col  md={4} sm={12} key={story.slug}>
                       
                       <BasicCard
                        imgSrc={`${story.storyPhoto.url}`}
                        cardTitle={story.storyTitle}
                        cardCopy={story.storySummary}
                        buttonCopy={"Read Story"}
                        link={`/story/${story.slug}`}
                    />
                    </Col>
                ))}
            </Row>
        </Container>
    )
};

export default FrontPgLeadStories;