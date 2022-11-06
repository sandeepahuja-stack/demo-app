import React from "react";
import { GoogleLogin } from "react-google-login";
export const CLIENT_ID =
  "817821046927-575ifa4l722g17vtf53vj4idovnndubr.apps.googleusercontent.com";
const Login = ({ updateProfile }) => {
  const onSuccess = (res) => {
    console.log("Login Success user", res, res.profileObj);
    updateProfile(res.profileObj);
  };

  const onFailure = (res) => {
    console.log("Login Success user", res);
  };
  return (
    <>
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        isSignedIn={true}
        cookiePolicy="single_host_origin"
      />
    </>
  );
};

export default Login;
