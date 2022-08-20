import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import darkTheme from '../../theme/darkTheme';


const Layout = ({ children }) => {
  return (<StyledEngineProvider injectFirst>
    {/* @todo -- Refactpr this to pull the theme from a configurable source! */}
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        {children}
      </div>
    </ThemeProvider>
  </StyledEngineProvider>)
}

export default Layout