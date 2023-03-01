import styled from 'styled-components';
import getLatestStories from "../../graphql/query-functions/LatestStories";

// Components
import JustInStoriesSection from '../../components/partial-pages/JustInStories';

const JustInPage = ({stories}) => {
    return (
        <>

            <div>
                <h1>Just In</h1>
            </div>

            <JustInStoriesSection stories={stories}/>

        </>
    );
};

export default JustInPage;

// Server side render the page on request as the content is dynamic
export const getServerSideProps = async () => {
    const stories = await getLatestStories(3);

    return {
        props: { stories },
    };
}

