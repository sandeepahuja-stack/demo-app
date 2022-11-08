import React from "react";
import { GoogleLogout } from "react-google-login";
import { customerListEmpty } from "redux/actions/customerList.actions";
import { userLoggedOut } from "redux/actions/user.actions";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";

const Logout = ({ onClose }) => {
  const dispatch = useDispatch();
  const onSuccess = () => {
    dispatch(userLoggedOut());
    dispatch(customerListEmpty());

    console.log("Logout Success user");
  };

  return (
    <>
      <span id="signOutButton">
        <GoogleLogout
          render={(props) => (
            <Button
              onClick={() => {
                onClose();
                props.onClick();
              }}
            >
              Logout
            </Button>
          )}
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          onLogoutSuccess={onSuccess}
          icon={false}
        />
      </span>
    </>
  );
};

export default Logout;
