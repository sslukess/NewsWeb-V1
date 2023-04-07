import getLatestStories from "../../graphql/query-functions/LatestStories";
import { RawStory, NormalisedStory } from "../../types/index.d";
import mapRawResponseToStoryObject from "../../graphql/data-mapping/StoryDataMapping";

// Components
import JustInStoriesSection from '../../components/partial-pages/JustInStories';
import Container from 'react-bootstrap/Container';

import { GetStaticPaths, GetStaticProps } from 'next';
import getStoryTopics from "../../utils/story-utils/GetStoryTopics";
import slugify from "slugify";


// -- Generate the page paths for each story category 


export const getStaticPaths: GetStaticPaths = async () => {

    const topics = await getStoryTopics();

    // Return the paths for each category
    const paths = topics.map((topic) => {
        return {
            params: { topic: slugify(topic).toLowerCase() },
        };
    });

    return {
        paths,
        fallback: 'blocking',
    };

}

// Server side render the page on request as the content is dynamic
export const getStaticProps = async () => {
   
    return {
        props: { 'hello': 'world' },
    };
}


const CategoryPage = () => {


    return (
        <>

            <Container>
                <h1>I AM A CATEGORY</h1>
            </Container>

        </>
    );
};

export default CategoryPage;

