import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import apolloClient from '../Client';
import { FRAGMENT_STORY_CONTENT } from '../fragments/StoryContent';

const getLatestStories = async (n) => {

    const LATEST_STORIES_QUERY = gql`
        ${FRAGMENT_STORY_CONTENT}    
        query LatestStories {
            storyCollection(limit: ${n}) {
                ...StoryElements
                }
        }
    `

    const { data } = await apolloClient.query({
        query: LATEST_STORIES_QUERY,
    });

    return data.storyCollection.items;
}

export default getLatestStories;
