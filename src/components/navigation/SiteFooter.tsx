'use client'
import styled from 'styled-components';
import theme from '../../styling/CSS/theme/theme';

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primary};
    color: ${theme.text.colors.light};
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: auto;
`;

// TODO: Refactor styles out of elements and into styled compenents.
export default function Footer() {

    return (

        <StyledFooter className="">
            <div className="px-md-3 px-sm-2">
                <i className="d-none d-md-inline">The  Cold Harbour Times</i>
            </div>
            <div className="px-md-3 px-sm-2">© Luke Sampson Searle, 2023</div>
        </StyledFooter>

    )
}