import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const HeroWrapper = styled.div`
    display: flex;
    justify-content: end;
    width: 100%;
    height: auto; 
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 20px;
    margin-bottom: 20px;
`;

const IntroBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.primary};
`;

// === Compoenents ===

const Heading = ({ copy }) => {
    return (
        <h1>{copy}</h1>
    )
}

const Paragraph = ({ copy }) => {
    return (
        <p>{copy}</p>
    )
}

const HeroButton = ({ copy }) => {
    return (
        <Button>{copy}</Button>
    )
}


const HeroPanel = ({ imgSrc, headingCopy, paragraphCopy, buttonCopy }) => {
    return (
        <HeroWrapper backgroundImage={imgSrc}>
            <Container
                fluid >
                <Row>
                    <Col md={4}>
                        <IntroBlock>
                            <Heading copy={headingCopy}/>
                           <div> <Paragraph copy={paragraphCopy} /> <HeroButton copy={buttonCopy}/></div>
                        </IntroBlock>
                    </Col>
                    <Col md>&nbsp;</Col>
                </Row>
            </Container>
        </HeroWrapper>
    );
};

export default HeroPanel;