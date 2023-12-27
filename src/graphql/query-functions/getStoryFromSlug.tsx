import { gql } from '@apollo/client';
import apolloClient from '../Client';
import { FRAGMENT_STORY_CONTENT } from '../fragments/StoryContent';

export const getStoryFromSlug = async (storySlug: string) => {

    const STORY_QUERY = gql`

    ${FRAGMENT_STORY_CONTENT}
    query {
        storyCollection(where: { slug: ${storySlug} } ) {
          items {
            ...StoryElements
          }
        } 
      }
  `
    const { data } = await apolloClient.query({
        query: STORY_QUERY,
    });

    return data.storyCollection.items;
}

export default getStoryFromSlug;

// EXAMPLE QUERY 
// query {
//     storyCollection(where: { slug: "womens-world-cup-steel-roses-outkick-men-in-chinese-football" } ) {
//       items {
//               storyTitle
//               storyText {
//                 json
//               }
//               storySummary {
//                 json
//               }
//               storyPhoto {
//                 fileName
//                 url
//               }
//               slug
//               storyTopics
//               storyDate
//               author
//           }
//       }
//     } 
