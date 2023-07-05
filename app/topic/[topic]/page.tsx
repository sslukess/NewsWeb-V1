import getLatestStories from "../../../graphql/query-functions/LatestStories";
import { RawStory, NormalisedStory } from "../../../types/index.d";
import mapRawResponseToStoryObject from "../../../graphql/data-mapping/StoryDataMapping";
import apolloClient from '../../../graphql/Client'
import { ALL_STORIES_QUERY } from '../../../graphql/queries/AllStories'

// Components
import JustInStoriesSection from '../../just-in/components/JustInStories';

import getStoryTopics from "../../../utils/story-utils/GetStoryTopics";


// -- Generate the page paths for each story category 


export const generateStaticParams = async () => {

    const topics = await getStoryTopics();

    // Return the paths for each category
    const paths = topics.map((top) => {
        return { topic: top };
    });

    return paths;
}

const getStoriesFromTopic = async ( topicToGet: string ): Promise<RawStory[]> => {

    const { data } = await apolloClient.query({
        query: ALL_STORIES_QUERY,
    });

    const stories: RawStory[] = data.storyCollection.items;
    
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
   
    return storiesFromTopic;
}


const CategoryPage = async ({params}) => {

    const topicToGet = params?.topic.toLowerCase();

    if (!topicToGet) return; // return if the topic is null

    const stories: RawStory[] = await getStoriesFromTopic(topicToGet);

    // clean the stories data
    const cleanedStories: NormalisedStory[] = stories.map((item) => {
        const cleanStory = mapRawResponseToStoryObject(item);
        return cleanStory;
    });

    return (
        <>

            <div className={'container'}>
                <h1>{topicToGet}</h1>
            </div>

            <JustInStoriesSection stories={cleanedStories}/>

        </>
    );
};

export default CategoryPage;

