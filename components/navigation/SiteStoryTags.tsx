
import styled from 'styled-components';
import { Container, Form, InputGroup } from 'react-bootstrap';
import { placeholderTags } from './TestingDataTags';

// Nav styles
const CatagoryNavBarContainer = styled(Container)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
    border-bottom: 10px solid ${({ theme }) => theme.colors.primary};
`;


// story nav bar tag 
const CatagoryNavBarStoryTag = styled.div`
    padding: 5px;
    margin: 5px;
    text-align: center;
`;

export function BasicStoryCategoryTags({tags}) {

    return (
        tags.map((tag) => (
            <CatagoryNavBarStoryTag>{tag}</CatagoryNavBarStoryTag>
        )))
    };


function StoryCatagoryNavBar() {

    return (

        <CatagoryNavBarContainer fluid>
            <BasicStoryCategoryTags tags={placeholderTags} />
        </CatagoryNavBarContainer>
    )
}

export default StoryCatagoryNavBar;