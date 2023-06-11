import getLatestStories from "../../../graphql/query-functions/LatestStories";
import { RawStory, NormalisedStory } from "../../../types/index.d";
import mapRawResponseToStoryObject from "../../../graphql/data-mapping/StoryDataMapping";
import apolloClient from '../../../graphql/Client'
import { ALL_STORIES_QUERY } from '../../../graphql/queries/AllStories'

// Components
import JustInStoriesSection from '../../../components/partial-pages/JustInStories';
import Container from 'react-bootstrap/Container';

import getStoryTopics from "../../../utils/story-utils/GetStoryTopics";
import slugify from "slugify";


// -- Generate the page paths for each story category 


export const generateStaticParams = async () => {

    const topics = await getStoryTopics();

    // Return the paths for each category
    const paths = topics.map((top) => {
        return { topic: top };
    });

    return paths;
}

// Server side render the page on request as the content is dynamic
const getStoriesFromTopic = async ( topicToGet: string ): Promise<RawStory[]> => {

    const { data } = await apolloClient.query({
        query: ALL_STORIES_QUERY,
    });

    const stories: RawStory[] = data.storyCollection.items;

    console.log('all returned stories', stories);
    // filter the stories for the topic
    const storiesFromTopic = stories.filter((story) => {

        if (story?.storyTopics === undefined || story?.storyTopics === null || story?.storyTopics.length === 0) {
            return false;
        }

        const lowerCaseTopics = story.storyTopics.map((topic) => {
            return topic.toLowerCase();
        });

        if (lowerCaseTopics.includes(topicToGet)) {
            return true;
        }

        return false;
    });

    // Console log filtered stories 
    console.log('stories from topic', storiesFromTopic);
   
    return storiesFromTopic;
}


const CategoryPage = async ({params}) => {

    const topicToGet = params.topic;

    const stories: RawStory[] = await getStoriesFromTopic(topicToGet);

    // clean the stories data
    const cleanedStories: NormalisedStory[] = stories.map((item) => {
        const cleanStory = mapRawResponseToStoryObject(item);
        return cleanStory;
    });

    return (
        <>

            <div>
                <h1>{topicToGet}</h1>
            </div>

            <JustInStoriesSection stories={cleanedStories}/>

        </>
    );
};

export default CategoryPage;

