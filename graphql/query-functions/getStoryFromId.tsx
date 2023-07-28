import { gql } from '@apollo/client';
import apolloClient from '../Client';
import { FRAGMENT_STORY_CONTENT } from '../fragments/StoryContent';

const getStoryFromId = async (id: string) => {

    const STORY_QUERY = gql`

    ${FRAGMENT_STORY_CONTENT}
    query StroyFromId {
        story(id: "${id}") {    
            ...StoryElements
        } 
    }
`

    const { data } = await apolloClient.query({
        query: STORY_QUERY,
    });

    return data.story;
}

export default getStoryFromId;

// EXAMPLE QUERY 
// query {
// 	story(id: "7tOwhUfrVTHQgsvdOhkEEC") {
    
//     storyTitle
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
    
//   }
// }