import React from "react";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import ErrorBoundary from "../ErrorBoundary";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Login from "components/Login";
import { useSelector } from "react-redux";
function Layout(props) {
  const theme = createTheme();
  const { name = "" } = useSelector((state) => state.user);

  return (
    <ThemeProvider theme={theme}>
      {/* Navbar section to be created */}
      <Navbar />
      <ErrorBoundary>
        <Container
          style={{
            minHeight: "800px",
          }}
        >
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
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
