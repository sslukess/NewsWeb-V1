'use client'

import styled, { keyframes } from 'styled-components';
import theme from '../../styling/CSS/theme/theme';
import { Container } from 'react-bootstrap';
import convertTopicsToLinks from '../../utils/story-utils/ConvertTopicsToLinks';
import { SearchBar } from '@/components/component-building-blocks/ComponentBuildingBlockIndex';
import useScreenSize from '../../utils/custom-hooks/useScreenSize';

// Nav styles
const TopicNavBarContainer = styled(Container)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
    border-bottom: 7px solid ${theme.colors.secondary};
`;

const wiggle = keyframes`
    0% { transform: scale(1); }
    100% { transform: scale(1.1); }
`

// story nav bar tag 
const TopicNavBarStoryTag = styled.div`
    padding: 5px;
    margin: 5px;
    text-align: center;

    &:hover {
        animation: ${wiggle} 0.3s;
        animation-fill-mode: forwards;
        color: ${theme.text.colors.linkHover} !important;
    }  
`;

// Header element 
const SearchWrapper = styled.div`
    padding: 10px;
    flex: 0 0 7em;
    display: flex;
    justify-content: end;
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

    const screenSize = useScreenSize();

    return (
        <TopicNavBarContainer fluid>
            <BasicStoryTopicTags tags={tagsJustLinks} />

                <SearchWrapper>
                    <SearchBar />
                </SearchWrapper>


        </TopicNavBarContainer>
    )
}

export default StoryTopicNavBar;