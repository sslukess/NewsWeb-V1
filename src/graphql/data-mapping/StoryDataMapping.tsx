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
    topics: [],
    storyDate: '',
    author: '',
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
        topics: [],
        storyDate: '',
        author: '',
    };

    // get the data for the story page, (note this is with with defaults in place.)
    const {
        storyTitle = defaultRawStory.storyTitle,
        storyText = defaultRawStory.storyText,
        storySummary = defaultRawStory.storySummary,
        storyPhoto = defaultRawStory.storyPhoto,
        slug = defaultRawStory.slug,
        topics = defaultRawStory.topics, 
        storyDate = defaultRawStory.storyDate,
        author = defaultRawStory.author 
        } = data;

    // Convert the storyText and storySummary Rich Text json to JSXs
    // Note extra check for null as the Rich Text entry can have a null value itself. 
    const StoryTextJSX = storyText?.json ? documentToReactComponents(storyText.json) : <></>;
    const StorySummaryJSX = storySummary?.json ? documentToReactComponents(storySummary.json) : <></>;

    // pull the image URL + file name from the storyPhoto object
    const storyPhotoURL = storyPhoto?.url;
    const storyPhotoFileName = storyPhoto?.fileName;

    // map data to normalisedStory
    normalisedStory.storyTitle = storyTitle;
    normalisedStory.storyBody = StoryTextJSX;
    normalisedStory.storySummary = StorySummaryJSX;
    normalisedStory.storyPhoto = {
        fileName: storyPhotoFileName,
        url: storyPhotoURL,
    };
    normalisedStory.slug = slug;
    normalisedStory.topics = topics;
    normalisedStory.author = author;

    // Date 
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    normalisedStory.storyDate = new Date(storyDate).toLocaleDateString('en-AU', options as any).replace(",", "");

    return normalisedStory;
}

export default mapRawResponseToStoryObject;
