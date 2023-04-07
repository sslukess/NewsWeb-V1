// styled components theme provider
import { ThemeProvider } from 'styled-components'
import theme from '../styling/CSS/theme/theme'
import styled from 'styled-components';

// Bootstrap things
import SSRProvider from 'react-bootstrap/SSRProvider';

//CSS Imports
import '../styling/CSS/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// Font
import { Roboto_Slab } from 'next/font/google';
const robotoSlab = Roboto_Slab({
    subsets: ["latin"],
    weight: "400"
})

// importing components
import { Sidebar, SiteFooter, SiteHeader } from '../components/index'

// === End Imports ===

const Main = styled.main`
    color: ${({ theme }) => theme.text.colors.primary};
`;

const App = ({ Component, pageProps }) => {

    return (
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
    );
}

export default App;