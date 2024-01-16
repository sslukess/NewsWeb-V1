import styled from "styled-components"
import theme from "@/styling/CSS/theme/theme"
import { breakpoint, breakpointSizes } from "@/styling/style-mix-ins/CssBreakpoints"


const MainLogoWord = styled.h1`
    margin-bottom: 0px;
    font-size: 4rem; 
    line-height: 1;

    ${breakpoint.down(breakpointSizes.sm)`
    font-size: 3rem; 
    `}
`

const UpperLogoWord = styled.p`
    margin-bottom: 0px;
    padding-left: 2px;
`

const LowerLogoWord = styled.p`
    margin-bottom: 0px;
    align-self: end;
`

const LogoFlexBox = styled.div`
    display: flex;
    flex-direction: column; 
    font-family: ${theme.text.family.logo}, ${theme.text.family.logoSerifSetting};
    color: ${theme.text.colors.logo};
`

type Masthead<t> = t extends number ? t extends 1 ? string : string[] : null;

interface XWordLogoProps<t> {
    masthead: Masthead<t>
}

interface LogoProps {
    masthead: string[];
}

function OneWordLogo({ masthead }: XWordLogoProps<1>): JSX.Element {

    return <MainLogoWord>{masthead}</MainLogoWord>
};

function TwoWordLogo({ masthead }: XWordLogoProps<2>): JSX.Element {

    return (
        <LogoFlexBox>
            <UpperLogoWord>{masthead[0]}</UpperLogoWord>
            <MainLogoWord>{masthead[1]}</MainLogoWord>
        </LogoFlexBox>
    );
};

function ThreeWordLogo({ masthead }: XWordLogoProps<3>): JSX.Element {

    return (
        <LogoFlexBox>
            <UpperLogoWord>{masthead[0]}</UpperLogoWord>
            <MainLogoWord>{masthead[1]}</MainLogoWord>
            <LowerLogoWord>{masthead[2]}</LowerLogoWord>
        </LogoFlexBox>
    );
};

const Logo = ({masthead}: LogoProps): JSX.Element => {

    const numberOfWords = masthead.length;

    switch (numberOfWords) {
        case 1:
            return <OneWordLogo masthead={masthead[0]} />
            break;
        case 2: 
            return <TwoWordLogo masthead={masthead} />
            break;
        case 3: 
            return <ThreeWordLogo masthead={masthead} />
            break;
        default:
            return <OneWordLogo masthead={masthead[0]} />
            break;

    }
};

export default Logo;