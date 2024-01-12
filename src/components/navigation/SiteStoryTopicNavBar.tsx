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
    border-bottom: 7px solid ${theme.colors.secondary};
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

            <TopicNavBarStoryTag key={tags.indexOf(tag)}>
                {tag}
            </TopicNavBarStoryTag>
        ))
    )
};


function StoryTopicNavBar({ topics }) {

    // just in static tag
    const justInTag = convertTopicsToLinks(['Just In']);

    // concatenate the links from the tags (these come from contentful)
    const tagLinks = justInTag.concat(convertTopicsToLinks(topics));

    const tagsJustLinks = tagLinks.map((tag) => tag.link);

    return (
        <TopicNavBarContainer fluid>
            <BasicStoryTopicTags tags={tagsJustLinks} />
        </TopicNavBarContainer>
    )
}

export default StoryTopicNavBar;