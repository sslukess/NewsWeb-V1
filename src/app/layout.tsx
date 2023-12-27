// styled components theme provider
import theme from '../styling/CSS/theme/theme'
import StyledComponentsRegistry from '../styling/styled-components/registry'

//CSS Imports
import '../styling/CSS/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/CSS/burger-menu.css';
import '../styling/CSS/global.css';

// importing components
import { SiteFooter, SiteHeader, SiteBurgerMenu } from '../components/index'

// importing utils 
import getStoryTopics from '../utils/story-utils/GetStoryTopics';
// import { useEffect } from 'react';

// === End Imports ===

// get site name from env
const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? 'News';

const RootLayout = async ({ children }) => {

    const topics = await getStoryTopics();

    return (
        <>
            <html>
                <head>
                    <title>{siteName}</title>

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Overpass&display=swap" rel="stylesheet" />
            </head>
            <body>
                <StyledComponentsRegistry>
                    <div id="outer-container">

                        {/* Site Burger Menu */}
                        <SiteBurgerMenu topics={topics} />

                        {/* Main App */}
                        <main>
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