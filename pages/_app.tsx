// styled components theme provider
import { ThemeProvider } from 'styled-components'
import theme from '../components/theme/theme'

import '../CSS/reset.css'

// importing components
import { NavHeader } from '../components/index'


const App = ({ children, }: { children: React.ReactNode; }) => {

    return (
        <>
            <ThemeProvider theme={theme}>
                <NavHeader />
                <section>{children}</section>
            </ThemeProvider>
        </>


    );

}

export default App;