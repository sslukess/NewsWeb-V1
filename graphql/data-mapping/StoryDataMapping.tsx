import { RawStory, NormalisedStory } from "../../types/index.d";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


// This object is the default data structure - 
// its not everything that is returned from the API but it is everything that is needed to provide defaults.
const defaultRawStory: RawStory = {
    storyTitle: '',
    storyText: {
        json: {
            "nodeType": "document",
            "data": {},
            "content": [
              {
                "nodeType": "paragraph",
                "data": {},
                "content": [
                  {
                    "nodeType": "text",
                    "value": "~ Story Text ~",
                    "marks": [],
                    "data": {}
                  }
                ]
              }
            ]
          },
    },
    storySummary: {
        json: {
            "nodeType": "document",
            "data": {},
            "content": [
              {
                "nodeType": "paragraph",
                "data": {},
                "content": [
                  {
                    "nodeType": "text",
                    "value": "~ Story Summary ~",
                    "marks": [],
                    "data": {}
                  }
                ]
              }
            ]
          },
    },
    storyPhoto: {
        url: '',
    },
    slug: '/', // route back to home. This is a default value to prevent errors
}


const mapRawResponseToStoryObject = (data: any) => {

    const normalisedStory: NormalisedStory = {
        storyTitle: '',
        storySummary: <></>,
        storyBody: <></>,
        storyPhoto: {
            fileName: '',
            url: '',
        },
        slug: '',
    };

    // get the data for the story page
    const {
        storyTitle = defaultRawStory.storyTitle,
        storyText = defaultRawStory.storyText,
        storySummary = defaultRawStory.storySummary,
        storyPhoto = defaultRawStory.storyPhoto,
        slug = defaultRawStory.slug } = data;

    // Convert the storyText and storySummary Rich Text json to JSXs
    const StoryTextJSX = documentToReactComponents(storyText.json);
    const StorySummaryJSX = documentToReactComponents(storySummary.json);

    // pull the image URL
    const storyPhotoURL = storyPhoto.url;

    // map data to normalisedStory
    normalisedStory.storyTitle = storyTitle;
    normalisedStory.storyBody = StoryTextJSX;
    normalisedStory.storySummary = StorySummaryJSX;
    normalisedStory.storyPhoto = {
        fileName: storyPhoto.fileName,
        url: storyPhotoURL,
    };
    normalisedStory.slug = slug;


    return normalisedStory;
}

export default mapRawResponseToStoryObject;
