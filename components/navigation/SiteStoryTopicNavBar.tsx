'use client'

import styled from 'styled-components';
import theme from '../../styling/CSS/theme/theme';
import { Container } from 'react-bootstrap';
import convertTopicsToLinks from '../../utils/story-utils/ConvertTopicsToLinks';

// Nav styles
const TopicNavBarContainer = styled(Container)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
    border-bottom: 10px solid ${theme.colors.primary};
`;


// story nav bar tag 
const TopicNavBarStoryTag = styled.div`
    padding: 5px;
    margin: 5px;
    text-align: center;
`;

export function BasicStoryTopicTags({ tags }) {

    if (!tags) return <>hello</>;

    return (
        tags.map((tag) => (

            <TopicNavBarStoryTag>
                {tag}
            </TopicNavBarStoryTag>
        ))
    )
};


function StoryTopicNavBar({ topics }) {

    // pull link from the tags

    const tagLinks = convertTopicsToLinks(topics);

    const tagsJustLinks = tagLinks.map((tag) => tag.link);

    return (
        <TopicNavBarContainer fluid>
            <BasicStoryTopicTags tags={tagsJustLinks} />
        </TopicNavBarContainer>
    )
}

export default StoryTopicNavBar;