// Using the contentful content API to get the list of Topics
// const API_ENDPOINT = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/content_types/story?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
const API_ENDPOINT = 'https://cdn.contentful.com/spaces/jamof5p0yuw2/environments/master/content_types/story?access_token=PvQwOxpG-yuTvjTJjItooCT7UqobBot76YIHwWhDbnQ'

// Get the list of Topics from the contentful content API
async function getStoryTopics(): Promise<string[]> {

    const topics = await fetch(API_ENDPOINT)
        .then((res) => res.json())
        .then((data) => {

            // get fields
            const fields = data.fields;

            // filter fields for category.id === 'storyTopics'
            const storyTopics = fields.filter((field) => field.id === 'storyTopics');

            // get the validations for the storyTopics field
            const validations = storyTopics[0].items.validations;

            // get the list of topics
            const topics = validations[0].in;

            return topics;
        });

    return topics;
};

export default getStoryTopics;

