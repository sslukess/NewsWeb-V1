// styled components theme provider
import { ThemeProvider } from 'styled-components'
import theme from '../components/theme/theme'
import styled from 'styled-components';

// Bootstrap things
import SSRProvider from 'react-bootstrap/SSRProvider';

//CSS Imports
import '../CSS/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// importing components
import { SiteNavBar, SiteFooter } from '../components/index'

// === End Imports ===

const Main = styled.main`
    color: ${({ theme }) => theme.text.colors.primary};
`;

const App = ({Component, pageProps}) => {

    return (
        <ThemeProvider theme={theme}>
            <SSRProvider>
                <Main>
                    <SiteNavBar />
                        <section>
                            <Component {...pageProps} />
                        </section>
                    <SiteFooter />
                </Main>
            </SSRProvider>
        </ThemeProvider>
    );

}

export default App;