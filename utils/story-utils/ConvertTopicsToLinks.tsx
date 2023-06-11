import slugify  from 'slugify';
import styled from 'styled-components';
// import next link 
import Link from 'next/link'

// import theme
import theme from '../../styling/CSS/theme/theme';

const StyledLink = styled(Link)`
    color: ${theme.text.colors.primary};
    text-decoration: none;
    &:hover {
        color: ${theme.text.colors.linkHover};
    }
`;



const convertTopicsToLinks = (topics: string[]) => {
    return topics.map((topic) => {
        return {
            displayLabel: topic,
            slug: slugify(topic).toLowerCase(),
            link: <StyledLink href={`/topic/${slugify(topic).toLowerCase()}`}>{topic}</StyledLink>,
        };
    });
};

export default convertTopicsToLinks;