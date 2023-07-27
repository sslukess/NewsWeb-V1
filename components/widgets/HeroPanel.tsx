'use client'

import styled from 'styled-components';
import theme from '../../styling/CSS/theme/theme';
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
    padding: 12px 60px;
    margin-bottom: 20px;
`;

const IntroBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-radius: 2px;
    padding: 20px;
    background-color: ${theme.colors.primary};
    color: ${theme.text.colors.light};
`

const ParagraphAndButton = styled.div`
    display: flex;
    justify-content: space-between;
`

const HeroButton = styled(Button)`
    align-self: end;
`

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


const HeroPanel = ({ imgSrc, headingCopy, paragraphCopy, buttonCopy }) => {
    return (
        <HeroWrapper backgroundImage={imgSrc}>
            <Container
                fluid >
                <Row>
                    <Col>
                            <IntroBlock>
                                <Heading copy={headingCopy} />
                                <Paragraph copy={paragraphCopy} /> <HeroButton te={buttonCopy} href={'/just-in'}>{buttonCopy}</HeroButton>
                                
                            </IntroBlock>

                    </Col>
                    {/* <Col >&nbsp;</Col> */}
                </Row>
            </Container>
        </HeroWrapper>
    );
};

export default HeroPanel;