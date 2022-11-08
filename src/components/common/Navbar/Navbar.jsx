import { AppBar, Box, Toolbar, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import Logout from "components/Login&Logout/Logout";
import { useSelector } from "react-redux";

const Navbar = () => {
  const style = {
    textDecoration: "none",
    color: "#fff",
  };

  const { name = "" } = useSelector((state) => state.user);

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

        <Box display="flex" justifyContent="end">
          {name}
          {!!name && <Logout />}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
