import { AppBar, Box, Toolbar, Typography, Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logout from "components/Logout/Logout";
import { useSelector } from "react-redux";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";

import Tooltip from "@mui/material/Tooltip";

const Navbar = () => {
  const style = {
    textDecoration: "none",
    color: "#fff",
  };

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const { name = "", imageUrl = "" } = useSelector((state) => state.user);

  return (
    <AppBar position="static" variant="elevation">
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box component="nav">
          <Typography
            variant="h6"
            component="a"
            sx={{ flexGrow: 1 }}
            role="menu"
          >
            <Link to="/" role="menu-link" style={style}>
              Zurich
            </Link>
          </Typography>
        </Box>

        {name && (
          <Box display="flex" justifyContent="end" alignItems={"center"}>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={name} src={imageUrl} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Typography textAlign="center">
                  {!!name && <Logout onClose={handleCloseUserMenu} />}
                </Typography>
              </Menu>
            </Box>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
