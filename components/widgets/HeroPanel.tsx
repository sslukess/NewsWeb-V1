import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { breakpoint, breakpointSizes } from '../../utils/style-mix-ins/breakpoints';


const HeroWrapper = styled.div`
    display: flex;
    justify-content: end;
    width: 100%;
    height: auto; 
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 40px 60px;
    margin-bottom: 20px;
`;

const IntroBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-radius: 2px;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.primary};


    ${breakpoint.up(breakpointSizes.md)` {
        width: 80%;
        `}
`;

const IntroBlockWrapper = styled.div`
${breakpoint.up(breakpointSizes.md)` {
    display: flex;
    justify-content: end;
    `}
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
                    <Col md={6}>
                        <IntroBlockWrapper>
                            <IntroBlock>
                                <Heading copy={headingCopy} />
                                <div> <Paragraph copy={paragraphCopy} /> <HeroButton copy={buttonCopy} /></div>
                            </IntroBlock>
                        </IntroBlockWrapper>

                    </Col>
                    <Col md>&nbsp;</Col>
                </Row>
            </Container>
        </HeroWrapper>
    );
};

export default HeroPanel;