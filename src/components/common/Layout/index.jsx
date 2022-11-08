import React from "react";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import ErrorBoundary from "../ErrorBoundary";
import Navbar from "../Navbar";
import Login from "components/Login&Logout";
import { useSelector } from "react-redux";
function Layout(props) {
  const theme = createTheme();
  const { name = "" } = useSelector((state) => state.user);

  return (
    <ThemeProvider theme={theme}>
      {/* Navbar section to be created */}
      <Navbar />
      <ErrorBoundary>
        <Container>
          {name === "" ? (
            <>
              <Login />
            </>
          ) : (
            props.children
          )}
        </Container>
      </ErrorBoundary>
      {/* 
      Footer section to be created
      */}
    </ThemeProvider>
  );
}

export default Layout;
