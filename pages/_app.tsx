// styled components theme provider
import { ThemeProvider } from 'styled-components'
import theme from '../styling/CSS/theme/theme'
import styled from 'styled-components';

// Bootstrap things
import SSRProvider from 'react-bootstrap/SSRProvider';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// Break points
import useSizeSize from '../utils/custom-hooks/useScreenSize';

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

// === End Imports ===

const Main = styled.main`
    color: ${({ theme }) => theme.text.colors.primary};
`;

const App = ({ Component, pageProps }) => {

    const screenSize = useSizeSize();

    return (
        <>

            <div id="outer-container">
                <ThemeProvider theme={theme}>
                    <SSRProvider>

                        {/* Site Burger Menu */}
                        {screenSize.isTabletOrMobile &&
                            <SiteBurgerMenu />
                        }

                        {/* Main App */}
                        <Main className={robotoSlab.className} >
                            <SiteHeader />
                            <section>
                                <Component {...pageProps} />
                            </section>
                            <SiteFooter />
                        </Main>
                    </SSRProvider>
                </ThemeProvider>
            </div>
        </>
    );
}

export default App;