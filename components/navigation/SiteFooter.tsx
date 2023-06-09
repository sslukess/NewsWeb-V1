'use client'
import styled from 'styled-components';
import theme from '../../styling/CSS/theme/theme';

const StyledFooter = styled.footer`
    background-color: ${theme.colors.secondary};
    color: ${theme.text.colors.light};
    padding: 10px;
    width: 100%;
`;

// TODO: Refactor styles out of elements and into styled compenents.
export default function Footer() {

    return (

        <StyledFooter className="position-absolute w-100 d-flex justify-content-center justify-content-sm-between align-items-end">
            <div className="px-md-3 px-sm-2">
                <i className="d-none d-md-inline">The Local Bulletin</i>
            </div>
            <div className="px-md-3 px-sm-2">Western Suburbs</div>
        </StyledFooter>

    )
}