import styled from 'styled-components';
import Image from 'next/image'
import Container from 'react-bootstrap/Container';

// Styled Image to be less wide 
const StyledImage = styled(Image)`
    width: 100%;
    height: auto;
`;

const ImageWrapper = styled.div`
    display: flex;
    justify-content: start;
    width: 70%;`

// get the image from the public folder
import TLB_logo from '../../public/TLB_logo.webp';

const HomePageWelcome = ({ welcomeMessageCopy }: { welcomeMessageCopy: JSX.Element }) => {
    return (
        <Container>
            <ImageWrapper>
                <StyledImage src={TLB_logo} alt="the Logo" />
            </ImageWrapper>
            {welcomeMessageCopy}
        </Container>

    );
};

export default HomePageWelcome;