import slugify from 'slugify';
import styled from 'styled-components';
// import next link 
import Link from 'next/link'

// import theme
import theme from '@/styling/CSS/CSS-renders/theme/theme';

const StyledLink = styled(Link)`
    color: ${(props) => props.tint = "dark" ? theme.text.colors.dark : theme.text.colors.linkColor};
    text-decoration: none;
    &:hover {
        color: ${(props) => props.tint = "dark" ? theme.text.colors.dark : theme.text.colors.linkHover};
    }
`;



const convertTopicsToLinks = (topics: string[], tint: 'light' | 'dark') => {
    return topics.map((topic) => {
        return {
            displayLabel: topic,
            slug: slugify(topic).toLowerCase(),
            link: <StyledLink
                href={`/topic/${slugify(topic).toLowerCase()}`}
                tint={tint}>
                {topic}
            </StyledLink>,
        };
    });
};

export default convertTopicsToLinks;