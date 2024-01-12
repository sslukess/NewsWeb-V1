
import { RawStory, NormalisedStory } from "../../../types/index.d";
import mapRawResponseToStoryObject from "../../../graphql/data-mapping/StoryDataMapping";
import apolloClient from '../../../graphql/Client'
import { ALL_STORIES_QUERY } from '../../../graphql/queries/AllStories'

// Components
import TopicPageMainContent from '../components/TopicPageMainContent';
import getStoryTopics from "../../../utils/story-utils/GetStoryTopics";
import { Suspense } from "react";
import {Spinner} from '@/components/component-building-blocks/atoms/Spinner';


// -- Generate the page paths for each story category 
// Commenting this out as it actually has a jarring effect on UX

// export const generateStaticParams = async () => {

//     const topics = await getStoryTopics();

//     // Return the paths for each category
//     const paths = topics.map((top) => {
//         return { topic: top };
//     });

//     return [paths];
// }

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

    const upperCaseTopic = params?.topic; // for some reason, browsers push the param with uppercase first Char. 
    const topicToGet = params?.topic.toLowerCase(); // lowercase

    if (!topicToGet) return; // return if the topic is null

    const stories: RawStory[] = await getStoriesFromTopic(topicToGet);

    // clean the stories data
    const cleanedStories: NormalisedStory[] = stories.map((item) => {
        const cleanStory = mapRawResponseToStoryObject(item);
        return cleanStory;
    });

    return (
        <Suspense fallback={<Spinner />}>
            <TopicPageMainContent stories={cleanedStories} pageHeading={upperCaseTopic}/>
        </Suspense>
    );
};

export default CategoryPage;

