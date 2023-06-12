import apolloClient from '../../../graphql/Client'
import { ALL_STORIES_QUERY } from '../../../graphql/queries/AllStories'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// disable all routes not returned from generateStaticParams
export const dynamicParams = false;

// getStaticPaths
export const generateStaticParams = async () => {

    const { data } = await apolloClient.query({
        query: ALL_STORIES_QUERY,
    })

    const paths = data.storyCollection.items.map((item) => { 
        return { slug: item.slug }
    });

    console.log(paths);

    return paths;
}

// getStaticProps
const getStoryContents = async ( params ) => {
    const { data } = await apolloClient.query({
        query: ALL_STORIES_QUERY,
    });

    //filter data for params slug
    const storyData = data.storyCollection.items.find(
        (item) => item.slug === params?.slug
    );

    return storyData;
}

// StoryPage component
const StoryPage = async ({ params }) => {

    // get the story data
    const story = await getStoryContents( params );

    // get the data for the story page
    const {storyTitle, storyText, storyPhoto } = story;

    // if there is missing data, 

    // Convert the storyText Rich Text json to JSX
    const StoryTextJSX = documentToReactComponents(storyText.json);

    // pull the image URL 
    const storyPhotoURL = `${storyPhoto.url}?w=200`;

    return (
        <div>
            <h1>{storyTitle}</h1>
            <img src={storyPhotoURL}/>
            {StoryTextJSX}
        </div>
    )
}

export default StoryPage;