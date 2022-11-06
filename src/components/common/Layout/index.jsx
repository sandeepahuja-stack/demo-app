import { Container, createTheme, ThemeProvider } from "@mui/material";
import React from "react";

function Layout(props) {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      {/* Navbar section to be created */}
      <Container>{props.children}</Container>
      {/* 
      Footer section to be created
      */}
    </ThemeProvider>
  );
}

export default Layout;
