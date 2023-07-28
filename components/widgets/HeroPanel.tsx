'use client'

import styled from 'styled-components';
import theme from '../../styling/CSS/theme/theme';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { breakpoint, breakpointSizes } from '../../styling/style-mix-ins/CssBreakpoints';

const HeroWrapper = styled(Container)`
    // display: flex;
    // justify-content: end;
    // width: 100%;
    // height: auto; 
    // background-image: url(${({ backgroundImage }) => backgroundImage});
    // background-size: cover;
    // background-position: center;
    // background-repeat: no-repeat;

    padding: 12px;
    
    ${breakpoint.up(breakpointSizes.lg)`
            padding: 12px 60px;
    `}
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
        <HeroWrapper backgroundImage={imgSrc} fluid >

                <Row>
                    <Col>
                            <IntroBlock>
                                <Heading copy={headingCopy} />
                                <Paragraph copy={paragraphCopy} /> <HeroButton te={buttonCopy} href={'/topic/just-in'}>{buttonCopy}</HeroButton>
                                
                            </IntroBlock>

                    </Col>
                    {/* <Col >&nbsp;</Col> */}
                </Row>

        </HeroWrapper>
    );
};

export default HeroPanel;