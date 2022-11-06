import { Container, createTheme, ThemeProvider } from "@mui/material";
import React from "react";

function Layout() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      {/* Navbar section to be created */}
      <Container></Container>
      {/* 
      Footer section to be created
      */}
    </ThemeProvider>
  );
}

export default Layout;
