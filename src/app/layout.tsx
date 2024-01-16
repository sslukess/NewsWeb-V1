// styled components theme provider
import StyledComponentsRegistry from '../styling/styled-components/registry'

//CSS Imports
import ThemeSheet from '@/styling/CSS/theme/ThemeMasterSheet';
import GoogleFontImports from '@/styling/CSS/GoogleFonts';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styling/CSS/burger-menu.css';

// importing components
import { SiteFooter, SiteHeader, SiteBurgerMenu } from '../components/index'

// importing utils 
import getStoryTopics from '../utils/story-utils/GetStoryTopics';

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

                    {/* Google Font Imports */}
                    <GoogleFontImports />

                    {/* Global Theme Sheet */}
                    <ThemeSheet />

                </head>
                <body>
                    <StyledComponentsRegistry>
                        <div id="outer-container">

                            {/* Site Burger Menu */}
                            <SiteBurgerMenu topics={topics} />

                            {/* Main App */}
                            <main>
                                <SiteHeader topics={topics} />
                                <section className='mainSection'>
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