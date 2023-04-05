import { Container } from "@mui/material";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import darkTheme from "../../theme/darkTheme";
import { GlobalStyles } from "@mui/material";
import React from 'react'

const backgroundStyle = (
  <GlobalStyles
    styles={{
      body: {
        backgroundColor: darkTheme.palette.background.paper
      },
    }}
  />
);

//@todo
const Layout = ({ children }: {
  children: any
}) => {
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
