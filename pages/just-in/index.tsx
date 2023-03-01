import styled from 'styled-components';
import getLatestStories from "../../graphql/query-functions/LatestStories";

// Components
import JustInStoriesSection from '../../components/partial-pages/JustInStories';
import Container from 'react-bootstrap/Container';

const JustInPage = ({stories}) => {
    return (
        <>

            <Container>
                <h1>Just In</h1>
            </Container>

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

