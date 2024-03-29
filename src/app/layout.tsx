// styled components theme provider
import StyledComponentsRegistry from '../styling/styled-components/registry'

//CSS Imports
import ThemeSheet from '@/styling/CSS/CSS-renders/theme/ThemeMasterSheet';
import GoogleFontImports from '@/styling/CSS/CSS-renders/GoogleFonts';
import BurgerMenuSheet from '@/styling/CSS/CSS-renders/BurgerMenu';
import 'bootstrap/dist/css/bootstrap.min.css';

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

                    {/* Burger Menu Sheet */}
                    <BurgerMenuSheet />

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