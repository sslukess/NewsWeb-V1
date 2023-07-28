// styled components theme provider
import theme from '../styling/CSS/theme/theme'
import StyledComponentsRegistry from '../styling/styled-components/registry'

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
import { SiteFooter, SiteHeader, SiteBurgerMenu } from '../components/index'

// importing utils 
import getStoryTopics from '../utils/story-utils/GetStoryTopics';
import convertTopicsToLinks from '../utils/story-utils/ConvertTopicsToLinks';
// import { useEffect } from 'react';

// === End Imports ===

// get site name from env
const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? 'News';

const RootLayout = async ({ children }) => {

    const topics = await getStoryTopics();

    return (
        <>
            <html className={robotoSlab.className}>
                <head>
                    <title>{siteName}</title>
                </head>
                <body>
                    <StyledComponentsRegistry>
                        <div id="outer-container">


                            {/* Site Burger Menu */}
                            <SiteBurgerMenu topics={topics} />

                            {/* Main App */}
                            <main  style={{color: theme.text.colors.primary}} >
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