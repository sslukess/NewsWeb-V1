import { gql } from '@apollo/client';
import apolloClient from '../Client';
import { FRAGMENT_STORY_CONTENT } from '../fragments/StoryContent';
import type { RawStory } from '@/types/index.d';

export const getStoriesFromSearchTerm = async (searchTerm: string): Promise<RawStory[]> => {

    const STORY_QUERY = gql`

    ${FRAGMENT_STORY_CONTENT}
    query {
        storyCollection(where: { storyTitle_contains: "${searchTerm}" } ) {
          items {
            ...StoryElements
          }
        } 
      }
  `
    const { data } = await apolloClient.query({
        query: STORY_QUERY,
    });

    return data.storyCollection.items as RawStory[];
}

export default getStoriesFromSearchTerm;
