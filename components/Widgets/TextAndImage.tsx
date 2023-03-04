import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
`;

const StyledImage = styled(Image)`
    object-fit: contain;
    height: 100%;
    width: auto;
`;

export default function TextAndImage({copy, image}) {
    
    return (
        <Container>
                    <ImageWrapper>
                        <StyledImage src={image} alt="alAlt" />
                    </ImageWrapper>
        </Container>
    )
};