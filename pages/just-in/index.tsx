import getLatestStories from "../../graphql/query-functions/LatestStories";
import { RawStory, NormalisedStory } from "../../types/index.d";
import mapRawResponseToStoryObject from "../../graphql/data-mapping/StoryDataMapping";
import { getPhotoWithSize } from "../../utils/story-utils/GetPhotoWithSize";

// Components
import JustInStoriesSection from '../../components/partial-pages/JustInStories';
import Container from 'react-bootstrap/Container';

const JustInPage = ({stories}) => {

    // clean the stories data
    const cleanedStories: NormalisedStory[] = stories.map((item) => {
        const cleanStory = mapRawResponseToStoryObject(item);
        return cleanStory;
    });

    return (
        <>

            <Container>
                <h1>Just In</h1>
            </Container>

            <JustInStoriesSection stories={cleanedStories}/>

        </>
    );
};

export default JustInPage;

// Server side render the page on request as the content is dynamic
export const getServerSideProps = async () => {
    const stories: RawStory[] = await getLatestStories(10);

    return {
        props: { stories },
    };
}

