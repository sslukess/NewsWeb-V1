'use client'

import { slide as Menu } from 'react-burger-menu'
import { placeholderTags } from './TestingDataTags'
import styled from 'styled-components'

// Import Components
import { SearchBar } from '../component-building-blocks/ComponentBuildingBlockIndex'

// Break points
import useSizeSize from '../../utils/custom-hooks/useScreenSize';


// Styled Search Bar
const SearchBarDiv = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
};

// styled.div`
//     padding: 5px;
// `;

// Story Tag Div
const StoryTagDiv = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
};

// styled.div`
//     padding: 5px;
//     color: red;
// `;

const HamburgerMenu = ({ children }) => {

    return (
        <Menu right>
            {children}
        </Menu>
    )
}

const HamburgerMenuWithItems = () => {

    const screenSize = useSizeSize();

    return (
        <>
        <div>hello</div>
        </>

    )
}

// {screenSize.isTabletOrMobile &&
//     <HamburgerMenu>
//         <SearchBarDiv>
//             <SearchBar />
//         </SearchBarDiv>
//         {/* {placeholderTags.map((tag) => (
//             <StoryTagDiv>
//                 {tag}
//             </StoryTagDiv>
//         ))} */}
//     </HamburgerMenu>
// }

const SiteBurgerMenu = HamburgerMenuWithItems;
export default SiteBurgerMenu