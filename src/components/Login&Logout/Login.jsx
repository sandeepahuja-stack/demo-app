import React from "react";
import { GoogleLogin } from "react-google-login";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";

import { userLoggedIn } from "redux/actions/user.actions";
export const CLIENT_ID =
  "817821046927-575ifa4l722g17vtf53vj4idovnndubr.apps.googleusercontent.com";
const Login = () => {
  const dispatch = useDispatch();
  const onSuccess = (res) => {
    console.log("Login Success user", res.profileObj);
    dispatch(userLoggedIn(res.profileObj));
  };

  const onFailure = (res) => {
    console.log("Login Success user", res);
  };
  return (
    <Box textAlign={"center"}>
      <Box display="flex" alignItems="baseline" justifyContent="center" my={5}>
        <Typography variant="h1" component="h2" fontWeight="bold">
          Z
        </Typography>
        <Typography variant="h3" component="h2" fontWeight="bold">
          urich
        </Typography>
      </Box>
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        isSignedIn={true}
        cookiePolicy="single_host_origin"
      />
    </Box>
  );
};

export default Login;
