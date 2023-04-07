import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'
import { useRouter } from 'next/router'
import { placeholderTags } from './TestingDataTags'
import styled from 'styled-components'

// Import Components
import { SearchBar } from '../component-building-blocks/ComponentBuildingBlockIndex'


// Styled Search Bar
const SearchBarDiv = styled.div`
    padding: 5px;
`;

// Story Tag Div
const StoryTagDiv = styled.div`
    padding: 5px;
    color: ${({ theme }) => theme.colors.primary};
`;

const HamburgerMenu = ({ children }) => {

    return (
        <Menu right>
            {children}
        </Menu>
    )
}

const HamburgerMenuWithItems = () => {

    const router = useRouter()

    return (
        <HamburgerMenu>
            <SearchBarDiv>
                <SearchBar />
            </SearchBarDiv>
            {placeholderTags.map((tag) => (
                <StoryTagDiv>
                    {tag}
                </StoryTagDiv>
            ))}
        </HamburgerMenu>
    )
}

const SiteBurgerMenu = HamburgerMenuWithItems;
export default SiteBurgerMenu