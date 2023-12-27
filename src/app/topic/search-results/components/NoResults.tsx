'use client';

import styled from 'styled-components';

// Styles Components 

const NoResultsWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px;
    flex-wrap: wrap;
    
`;

const NoResultsPara = styled.p`

`

export const NoResults = () => {
    'use client';
    return (
        <NoResultsWrapper>
            <NoResultsPara>Sorry, no results for that search...</NoResultsPara>
        </NoResultsWrapper>
    )
}