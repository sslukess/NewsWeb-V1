import apolloClient from '../../../graphql/Client'
import { ALL_STORIES_QUERY } from '../../../graphql/queries/AllStories'
import mapRawResponseToStoryObject from '../../../graphql/data-mapping/StoryDataMapping';
import type { NormalisedStory } from '../../../types/index.d';
import { getStoryFromSlug } from ''

// Components
import StoryPageStructure from './components/story-structure'

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
    const dirtyStory = await getStoryContents( params );
    const cleanStory: NormalisedStory = mapRawResponseToStoryObject(dirtyStory); // clean it

    // get the data for the story page
    const {storyTitle, storyBody, storyPhoto, author, storyDate } = cleanStory;

    // pull the image URL 
    const storyPhotoURL = `${storyPhoto.url}?w=400`;

    return (
        <StoryPageStructure storyTitle={storyTitle} storyBody={storyBody} storyPhotoURL={storyPhotoURL} author={author} storyDate={storyDate} />
    )
}

export default StoryPage;