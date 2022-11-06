import { AppBar, Box, Toolbar, Typography } from "@mui/material";

import { Link } from "react-router-dom";

const Navbar = () => {
  const style = {
    textDecoration: "none",
    color: "#fff",
  };

  return (
    <AppBar position="static" variant="elevation">
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Box component="nav">
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            role="menu"
          >
            <Link to="/" role="menu-link" style={style}>
              Zurich
            </Link>
          </Typography>
        </Box>

        <Box display="flex" justifyContent="end"></Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
