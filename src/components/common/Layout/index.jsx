import { Container, createTheme, ThemeProvider } from "@mui/material";
import Login from "components/Login&Logout";
import React, { useState } from "react";
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
      <Container>{props.children}</Container>
      {/* 
      Footer section to be created
      */}
    </ThemeProvider>
  );
}

export default Layout;
