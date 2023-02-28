// styled components theme provider
import { ThemeProvider } from 'styled-components'
import theme from '../components/theme/theme'

// Bootstrap things
import SSRProvider from 'react-bootstrap/SSRProvider';

//CSS Imports
import '../CSS/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// importing components
import { NavHeader, BasicExample } from '../components/index'


const App = ({ children, }: { children: React.ReactNode; }) => {

    return (
        <>
            <ThemeProvider theme={theme}>
                <SSRProvider>
                    <BasicExample />
                    <section>{children}</section>
                </SSRProvider>
            </ThemeProvider>
        </>


    );

}

export default App;