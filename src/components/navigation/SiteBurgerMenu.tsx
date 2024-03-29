'use client'

import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'
import convertTopicsToLinks from '../../utils/story-utils/ConvertTopicsToLinks';

// Import Components
import { SearchBar } from '../component-building-blocks/ComponentBuildingBlockIndex'

// Break points
import useSizeSize from '../../utils/custom-hooks/useScreenSize';


// Styled Search Bar
const SearchBarDiv = styled.div`
padding: 5px;
`;

// Story Tag Div
const StoryTagDiv = styled.div`
    padding: 5px;
`;

const HamburgerMenu = ({ children }) => {

    return (
        <Menu right>
            {children}
        </Menu>
    )
}

const HamburgerMenuWithItems = ({topics}) => {

    const screenSize = useSizeSize();

        // just in static tag
    const justInTag = convertTopicsToLinks(['Just In'], "dark");

    // concatenate the links from the tags (these come from contentful)
    const tagLinks = justInTag.concat(convertTopicsToLinks(topics, "dark"));

        const tagsJustLinks = tagLinks.map((tag) => tag.link);

    return (
        <>
            {screenSize.isTabletOrMobile &&
                <HamburgerMenu>
                    <SearchBarDiv>
                        <SearchBar />
                    </SearchBarDiv>
                    {tagsJustLinks.map((tag) => (
                        <StoryTagDiv key={tagsJustLinks.indexOf(tag)}>
                            {tag}
                        </StoryTagDiv>
                    ))}
                </HamburgerMenu>
            }
        </>

    )
}

const SiteBurgerMenu = HamburgerMenuWithItems;
export default SiteBurgerMenu