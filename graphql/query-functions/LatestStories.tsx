import { gql } from '@apollo/client';
import apolloClient from '../Client';
import { FRAGMENT_STORY_CONTENT } from '../fragments/StoryContent';
import mapRawResponseToStoryObject from '../data-mapping/StoryDataMapping';
import { getPhotoWithSize } from '../../utils/story-utils/GetPhotoWithSize';
import { NormalisedStory } from '../../types/index.d';


const getLatestStories = async (n = Infinity) => {

    const LATEST_STORIES_QUERY = gql`
        ${FRAGMENT_STORY_CONTENT}    
        query LatestStories {
            storyCollection(limit: ${n}) {
                ...StoryElements
            }
        }
    `;

    const { data } = await apolloClient.query({
        query: LATEST_STORIES_QUERY,
    });


    return data.storyCollection.items;
}

export default getLatestStories;
