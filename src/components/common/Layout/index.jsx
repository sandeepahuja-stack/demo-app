import { Container, createTheme, ThemeProvider } from "@mui/material";
import Login from "components/Login&Logout";
import React, { useState } from "react";
import ErrorBoundary from "../ErrorBoundary";
import Navbar from "../Navbar";

function Layout(props) {
  const theme = createTheme();
  const [profile, updateProfile] = useState(null);

  if (!profile) {
    return <Login updateProfile={updateProfile} />;
  }

  return (
    <ThemeProvider theme={theme}>
      {/* Navbar section to be created */}
      <Navbar updateProfile={updateProfile} />
      <ErrorBoundary>
        <Container>{props.children}</Container>
      </ErrorBoundary>
      {/* 
      Footer section to be created
      */}
    </ThemeProvider>
  );
}

export default Layout;
