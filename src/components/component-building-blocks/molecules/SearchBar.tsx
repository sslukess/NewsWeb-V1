'use client'

// sending the form submission to this page with the included query parameters.
// The page itself will interpret the term, data fetch and then display results. 
const searchResultsPage: string = "/topic/search-results"

const SearchBar = () => {

    return (
        <form action={searchResultsPage}>
                <input type="text" placeholder='search' name="searchTerm" id="searchTerm" />
        </form>
    )
}

export default SearchBar;