import { gql } from '@apollo/client'
import { FRAGMENT_STORY_CONTENT } from '../fragments/StoryContent'

export const ALL_STORIES_QUERY = gql`

    ${FRAGMENT_STORY_CONTENT}
    query AllStories {
        storyCollection {
            ...StoryElements
        }
    }
`