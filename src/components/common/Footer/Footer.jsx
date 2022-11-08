import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const style = {
    textDecoration: "none",
    color: "#fff",
  };
  return (
    <Box
      as="footer"
      sx={{
        width: "auto",
        backgroundColor: "primary.main",
      }}
      display="flex"
      alignItems="end"
      justifyContent="space-between"
      marginTop={4}
      padding={5}
    >
      <Box>
        <Typography variant="h3" component="a" sx={{ flexGrow: 1 }} role="menu">
          <Link to="/" role="menu-link" style={style}>
            Insure
          </Link>
        </Typography>
      </Box>
      <Box display="flex">
        <Box marginRight={2}>
          <Link to="/" role="menu-link" style={style}>
            Home
          </Link>
        </Box>

        <Link to="#" role="menu-link" style={style}>
          About
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
