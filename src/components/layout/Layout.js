import { Container } from '@mui/material';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import darkTheme from '../../theme/darkTheme';
import NavBar from '../nav/NavBar';


const Layout = ({ children }) => {
  return (<StyledEngineProvider injectFirst>
    {/* @todo -- Refactor this to pull the theme from a configurable source! */}
    <ThemeProvider theme={darkTheme}>
      <Container maxWidth="lg">
        {children}
      </Container>
    </ThemeProvider>
  </StyledEngineProvider>)
}

export default Layout