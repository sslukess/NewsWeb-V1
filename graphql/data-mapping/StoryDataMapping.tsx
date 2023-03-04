import { NormalisedStory } from "../../types/index.d";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const mapRawResponseToStoryObject = (data: any) => {
    
    const normalisedStory: NormalisedStory = {
        storyTitle: '',
        storyBody: <></>,
        storyPhoto: {
            fileName: '',
            url: '',
        },
        slug: '',
    };

    // get the data for the story page
    const {storyTitle, storyText, storyPhoto, slug } = data;

    // Convert the storyText Rich Text json to JSX
    const StoryTextJSX = documentToReactComponents(storyText.json);

    // pull the image URL
    const storyPhotoURL = `${storyPhoto.url}?w=200`;

    // map data to normalisedStory
    normalisedStory.storyTitle = storyTitle;
    normalisedStory.storyBody = StoryTextJSX;
    normalisedStory.storyPhoto = {
        fileName: storyPhoto.fileName,
        url: storyPhotoURL,
    };
    normalisedStory.slug = slug;
    

    return normalisedStory;
}

export default mapRawResponseToStoryObject;
