
import styled from 'styled-components';
import { Container, Form, InputGroup } from 'react-bootstrap';

// placeholder for tags/navs 
const tags = [
    "Just In",
    "Local",
    "Global",
    "Gardening",
    "Politics",
    "Pets",
    "Schools",
];



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
            <BasicStoryCategoryTags tags={tags} />
        </CatagoryNavBarContainer>
    )
}

export default StoryCatagoryNavBar;