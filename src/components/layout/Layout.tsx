import { Container } from "@mui/material";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import darkTheme from "../../theme/darkTheme";
import { GlobalStyles } from "@mui/material";
import React, { ReactElement } from 'react'
import { FixMeLater } from "../../types/FixMeLater";

const backgroundStyle: ReactElement<any, any> = (
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
  children: FixMeLater
}): JSX.Element => {
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
