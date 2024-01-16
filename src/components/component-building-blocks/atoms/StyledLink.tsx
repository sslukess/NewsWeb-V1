'use client'

import Link from 'next/link'
import styled from 'styled-components'
import theme from '@/styling/CSS/CSS-renders/theme/theme'


const StyledLink = styled(Link)`
    
    color: ${theme.text.colors.linkColor};

    // hover 
    &:hover {
        color: ${theme.text.colors.linkHover}
    }

    text-decoration: none;
`

export default StyledLink;
