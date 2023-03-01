import { gql } from '@apollo/client'
import { FRAGMENT_STORY_CONTENT } from '../fragments/StoryContent'

const ALL_STORIES_QUERY = gql`
    query AllStories {
        storyCollection {
            items {
                ${FRAGMENT_STORY_CONTENT}
            }
        }
    }
`

export default ALL_STORIES_QUERY;