import { GetStaticProps, GetStaticPaths } from 'next'
import apolloClient from '../../graphql/Client'
import { ALL_STORIES_QUERY } from '../../graphql/queries/AllStories'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// getStaticPaths
export const getStaticPaths: GetStaticPaths = async () => {

    const { data } = await apolloClient.query({
        query: ALL_STORIES_QUERY,
    })

    const paths = data.storyCollection.items.map((item) => ({
        params: { slug: item.slug },
    }))

    return { paths, fallback: false }
}

// getStaticProps
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { data } = await apolloClient.query({
        query: ALL_STORIES_QUERY,
    });

    //filter data for params slug
    const storyData = data.storyCollection.items.find(
        (item) => item.slug === params?.slug
    );

    return {
        props: {
            story: storyData,
        },
    }
}

// StoryPage component
const StoryPage = ({ story }) => {

    // get the data for the story page
    const {storyTitle, storyText, storyPhoto } = story;

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