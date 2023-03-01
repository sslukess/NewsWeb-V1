import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { FRAGMENT_STORY_CONTENT } from '../fragments/StoryContent';

const useGetLatestStories = (n) => {
    const { loading, error, data } = useQuery(gql`
        query LatestStories {
        storyCollection(limit: ${n}) {
            items {
            ${FRAGMENT_STORY_CONTENT}
            }
        }
        }
    `);

    return {
        loading,
        error,
        data,
    };
}

export default useGetLatestStories;
