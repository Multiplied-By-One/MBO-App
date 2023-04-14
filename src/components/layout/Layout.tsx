import { Container } from "@mui/material";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import darkTheme from "../../theme/darkTheme";
import { GlobalStyles } from "@mui/material";
import React, { ReactElement } from 'react'

const backgroundStyle: ReactElement<any, any> = (
  <GlobalStyles
    styles={{
      body: {
        backgroundColor: darkTheme.palette.background.paper
      },
    }}
  />
);

const Layout = ({ children }: {
  children: any
}): ReactElement<any, any> => {
  return (
    <StyledEngineProvider injectFirst>
      {/* @todo -- Refactor this to pull the theme from a configurable source! */}
      <ThemeProvider theme={darkTheme}>
        {backgroundStyle}
        <Container maxWidth="lg">{children}</Container>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Layout;
