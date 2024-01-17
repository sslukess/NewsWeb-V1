import { gql } from '@apollo/client';
import apolloClient from '../Client';
import { FRAGMENT_STORY_CONTENT } from '../fragments/StoryContent';
import queryConfiguration from './configurationQuery';
import type { RawStory } from '@/types/index.d';

async function retrieveSomeNumberOfStories(n: number) {
    const LATEST_STORIES_QUERY = gql`
        ${FRAGMENT_STORY_CONTENT}    
        query LatestStories {
            storyCollection(limit: ${n}, order: storyDate_DESC) {
                items {
                    ...StoryElements
                }
            }
        }
    `;

    const { data } = await apolloClient.query({
        query: LATEST_STORIES_QUERY,
    });

    return data.storyCollection.items;
}

const getLatestStories = async (n = Infinity) => {

    // get the lead story id from the configuration
    const leadStoryConfig = await queryConfiguration("LeadStory");
    const leadStoryId = leadStoryConfig[0]?.ConfigurationReferenceId;

    /* we get an additional story in case the lead is in there, 
    then we slice back down to 3 after filtereing. 
    if nothing filters, it will just get sliced. */
    let stories: RawStory[] = await retrieveSomeNumberOfStories(n + 1);

    // check if our lead story is in the latest stories via the id field.
    const filteredStories = stories.filter((story) => story.sys.id !== leadStoryId);

    return filteredStories.slice(0, 3);
};

export default getLatestStories;
