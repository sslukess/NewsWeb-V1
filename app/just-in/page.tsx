import getLatestStories from "../../graphql/query-functions/LatestStories";
import { RawStory, NormalisedStory } from "../../types/index.d";
import mapRawResponseToStoryObject from "../../graphql/data-mapping/StoryDataMapping";

// Components
import JustInStoriesSection from './components/JustInStories';
import Container from 'react-bootstrap/Container';

const getStoriesForPage = async (limit: number) => {
    const stories: RawStory[] = await getLatestStories(limit);
    return stories;
}

const JustInPage = async (props) => {

    // get the stories data
    const stories: RawStory[] = await getStoriesForPage(10);

    // clean the stories data
    const cleanedStories: NormalisedStory[] = stories.map((item) => {
        const cleanStory = mapRawResponseToStoryObject(item);
        return cleanStory;
    });

    return (
        <>
            <h1>Just In</h1>

            <JustInStoriesSection stories={cleanedStories} />

        </>
    );
};

export default JustInPage;

