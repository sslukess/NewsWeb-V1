import { getStoriesFromSearchTerm } from '@/graphql/query-functions/getStoryFromSearchTerm'
import mapRawResponseToStoryObject from "@/graphql/data-mapping/StoryDataMapping";

// Component Imports
import TopicPageMainContent from '../components/TopicPageMainContent';
import { NoResults } from './components/NoResults' 

import type { RawStory, NormalisedStory } from '@/types/index.d';

const Page = async ({ searchParams }) => {

    // Get the search term included with the params
    const { searchTerm } = searchParams;

    // if no term, just show the no results
    if (!searchTerm) return <NoResults />; 

    // get the stories data
    const stories: RawStory[] = await getStoriesFromSearchTerm(searchTerm);

    // if there are no stories, show the no results
    if (stories.length < 1) return <NoResults />

    // OK there are stories, lets clean the stories data
    const cleanedStories: NormalisedStory[] = stories.map((item) => {
        const cleanStory = mapRawResponseToStoryObject(item);
        return cleanStory;
    }); 

    // search results are essentially a custom topic, so the UI is resued. 
    return  <TopicPageMainContent stories={cleanedStories} pageHeading={'Search Results'} />
};

export default Page;