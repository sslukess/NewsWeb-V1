'use client'

import styled from 'styled-components';
import theme from '../../styling/CSS/theme/theme';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { breakpoint, breakpointSizes } from '../../styling/style-mix-ins/CssBreakpoints';

const HeroWrapper = styled(Container)`
    border-radius: 10px;
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
    border-radius: 4px;
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

const Heading = styled.h1`
    color: ${theme.text.colors.light}
`;

const Paragraph = styled.p`
    color: ${theme.text.colors.light}
`;

const HeroPanel = ({ imgSrc, headingCopy, paragraphCopy, buttonCopy }) => {
    return (
        <HeroWrapper fluid >

            <Row>
                <Col>
                    <IntroBlock>
                        <Heading >
                            {headingCopy}
                        </Heading>

                        <Paragraph>
                            {paragraphCopy}
                        </Paragraph>

                        <HeroButton variant={'light'} te={buttonCopy} href={'/topic/just-in'}>{buttonCopy}</HeroButton>

                    </IntroBlock>

                </Col>
                {/* <Col >&nbsp;</Col> */}
            </Row>

        </HeroWrapper>
    );
};

export default HeroPanel;