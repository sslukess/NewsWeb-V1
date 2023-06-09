// styled components theme provider
import theme from '../styling/CSS/theme/theme'

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
import getStoryTopics from '../utils/story-utils/GetStoryTopics';
import convertTopicsToLinks from '../utils/story-utils/ConvertTopicsToLinks';
// import { useEffect } from 'react';

// === End Imports ===

const RootLayout = async ({ children }) => {

    const topics = await getStoryTopics();
    // console.log(topics);

    return (
        <>
            <html>
                <head>
                    <title>My page</title>
                </head>
                <body>
                    <StyledComponentsRegistry>
                        <div id="outer-container">


                            {/* Site Burger Menu */}
                            {/* <SiteBurgerMenu /> */}

                            {/* Main App */}
                            <main className={robotoSlab.className} style={{color: theme.text.colors.primary}} >
                                <SiteHeader topics={topics} />
                                <section>
                                    {children}
                                </section>
                                <SiteFooter />
                            </main>
                        </div>
                    </StyledComponentsRegistry>
                </body>
            </html>

        </>
    );
}

export default RootLayout;