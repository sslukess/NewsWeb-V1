'use client'
import styled from 'styled-components';
import theme from '../../styling/CSS/theme/theme';
import getMastheadName from '@/utils/app-utils/getMastheadName';

const StyledFooter = styled.footer`
    border-radius: 0 0 3px 3px;
    background-color: ${theme.colors.secondary};
    color: ${theme.text.colors.footer};
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: auto;
`;

// TODO: Refactor styles out of elements and into styled compenents.
export default function Footer() {

    const masthead = getMastheadName();

    return (

        <StyledFooter className="">
            <div className="px-md-3 px-sm-2">
                <i className="d-none d-md-inline">{masthead.join(" ")}</i>
            </div>
            <div className="px-md-3 px-sm-2">© Luke Sampson Searle, 2023</div>
        </StyledFooter>

    )
}