import { gql } from '@apollo/client'

export const FRAGMENT_STORY_CONTENT = gql`
fragment StoryElements on Story {
      storyTitle
      storyText {
        json
      }
      storySummary {
        json
      }
      storyPhoto {
        fileName
        url
      }
      slug
      storyTopics
      storyDate
      author
  }
`