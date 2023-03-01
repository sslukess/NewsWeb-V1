export const FRAGMENT_STORY_CONTENT = `fragment StoryElements on storyCollection {

    storyTitle
    storyText {
      json
    }
    storyPhoto {
      fileName
      url
    }
  }`