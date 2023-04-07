// styled components theme provider
import { ThemeProvider } from 'styled-components'
import theme from '../styling/CSS/theme/theme'
import styled from 'styled-components';

// Bootstrap things
import SSRProvider from 'react-bootstrap/SSRProvider';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// Break points
import useSizeProvider from '../utils/custom-hooks/useScreenSize';

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
import { Sidebar, SiteFooter, SiteHeader, SiteBurgerMenu } from '../components/index'

// === End Imports ===

const Main = styled.main`
    color: ${({ theme }) => theme.text.colors.primary};
`;

const App = ({ Component, pageProps }) => {

    const screenSize = useSizeProvider();

    return (
        <>
            {/* Site Burger Menu */}
            {screenSize.isTabletOrMobile &&
                <SiteBurgerMenu>
                    <Form>
                        <InputGroup>
                            {/* <InputGroup.Text>search</InputGroup.Text> */}
                            <Form.Control type="text" placeholder='search' />
                        </InputGroup>
                    </Form>
                </SiteBurgerMenu>
            }

            {/* Main App */}
            <div id="outer-container">
                <ThemeProvider theme={theme}>
                    <SSRProvider>
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