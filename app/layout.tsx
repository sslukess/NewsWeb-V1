// styled components theme provider
// import { ThemeProvider } from 'styled-components'
// import theme from '../styling/CSS/theme/theme'
// import styled from 'styled-components';

import StyledComponentsRegistry from '../styling/styled-components/registry'

// Bootstrap things
// import SSRProvider from 'react-bootstrap/SSRProvider';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';

// // Break points
// import useSizeSize from '../utils/custom-hooks/useScreenSize';

//CSS Imports
import '../styling/CSS/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/CSS/burger-menu.css'

// Font
import { Roboto_Slab } from 'next/font/google';
const robotoSlab = Roboto_Slab({
    subsets: ["latin"],
    weight: "400"
})

// importing components
import { SiteFooter, SiteHeader } from '../components/index'

// importing utils 
// import getStoryTopics from '../utils/story-utils/GetStoryTopics';
// import { useEffect } from 'react';

// === End Imports ===
// const Main = styled.main`
//     color: ${({ theme }) => theme.text.colors.primary};
// `;

const RootLayout = ({ children }) => {

    // const screenSize = useSizeSize();

    return (
        <>
            <html>
                <head>
                    <title>My page</title>
                </head>
                <body>
                    <StyledComponentsRegistry>
                        <div id="outer-container">
                            {/* <ThemeProvider theme={theme}> */}


                            {/* Site Burger Menu */}
                            {/* <SiteBurgerMenu /> */}


                            {/* Main App */}
                            <main className={robotoSlab.className} >
                                <SiteHeader topics={['hi']} />
                                <section>
                                    {children}
                                </section>
                                <SiteFooter />
                            </main>

                            {/* </ThemeProvider> */}
                        </div>

                    </StyledComponentsRegistry>
                </body>
            </html>

        </>
    );
}

export default RootLayout;