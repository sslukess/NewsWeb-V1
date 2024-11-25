'use client';

import styled from 'styled-components';

import theme from '@/styling/CSS/CSS-renders/theme/theme'

// sending the form submission to this page with the included query parameters.
// The page itself will interpret the term, data fetch and then display results. 
const searchResultsPage: string = "/topic/search-results"

const StyledSearchBox = styled.input`
    padding: 4px;
    text-align: end;

    &:active,
    &:focus {
        outline: 0.5px solid ${theme.colors.secondary};
    }
`

const SearchBar = () => {

    return (
        <form action={searchResultsPage}>
                <StyledSearchBox type="text" placeholder='🔍' name="searchTerm" id="searchTerm" />
        </form>
    )
}

export default SearchBar;