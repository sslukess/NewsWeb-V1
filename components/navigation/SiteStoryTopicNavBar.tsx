
import styled from 'styled-components';
import { Container, Form, InputGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { placeholderTags } from './TestingDataTags';


import getStoryTopics from '../../utils/story-utils/GetStoryTopics';
import convertTopicsToLinks from '../../utils/story-utils/ConvertTopicsToLinks';

// Nav styles
const TopicNavBarContainer = styled(Container)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
    border-bottom: 10px solid ${({ theme }) => theme.colors.primary};
`;


// story nav bar tag 
const TopicNavBarStoryTag = styled.div`
    padding: 5px;
    margin: 5px;
    text-align: center;
`;

export function BasicStoryTopicTags({ tags }) {

    return (
        tags.map((tag) => (
            <TopicNavBarStoryTag>
                {tag}
            </TopicNavBarStoryTag>
        )))
};


function StoryTopicNavBar( { topics } ) {

    const [tags, setTags] = useState([{
        displayLabel: 'loading',
        slug: 'loading',
        link: <div>loading</div>
    }]);

    // use Effect to only run the getStoryTopics function once and not keep hitting the api
     useEffect(() => {

        const callMe = async () => {
        const topics = await getStoryTopics();

        // convert the raw array of topics to useable stuff like prebuild links etc.
        const processTopics = await convertTopicsToLinks(topics);

        // set the state of the tags
        setTags(processTopics);
        }
        callMe();

    }, []);

    // pull link from the tags
    const tagsLinks = topics.map((tag) => tag.link);

    return (
        <TopicNavBarContainer fluid>
            <BasicStoryTopicTags tags={tagsLinks} />
        </TopicNavBarContainer>
    )
}

export default StoryTopicNavBar;