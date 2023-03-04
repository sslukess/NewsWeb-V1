import { NormalisedStory } from "../../types/index.d";

export const getPhotoWithSize = (story: NormalisedStory, size: number): string => {
    return `${story.storyPhoto.url}?w=${size}`;
}