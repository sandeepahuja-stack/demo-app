import React from "react";
import { GoogleLogout } from "react-google-login";
import { CLIENT_ID } from "./Login";
import { customerListEmpty } from "redux/actions/customerList.actions";
import { userLoggedOut } from "redux/actions/user.actions";
import { useDispatch } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();
  const onSuccess = () => {
    dispatch(userLoggedOut());
    dispatch(customerListEmpty());

    console.log("Logout Success user");
  };

  return (
    <>
      <div id="signOutButton">
        <GoogleLogout
          clientId={CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={onSuccess}
        />
      </div>
    </>
  );
};

export default Logout;
