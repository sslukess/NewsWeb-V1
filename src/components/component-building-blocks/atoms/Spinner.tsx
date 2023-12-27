'use client';
import theme from '@/styling/CSS/theme/theme'

import styled from 'styled-components';

export const Spin = styled.div`
    width: 48px;
    height: 48px;
    border: 5px solid ${theme.colors.primary};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation_go 1s linear infinite;


    @keyframes rotation_go {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
}`

const SpinWrapper = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center;
    height: 100%;
    padding: 30px;
`

export function Spinner() {
    // You can add any UI inside Loading, including a Skeleton.

    return (
        <SpinWrapper>
            <Spin />
        </SpinWrapper>
    )
}