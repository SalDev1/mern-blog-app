import React, { useState } from "react";
import { Container, SwitchButtons, AppName, Button, FormPage } from "./styles";
import Login from "./SignUp";
import SignUp from "./Login";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Auth = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [toggle, setToggle] = useState(false);
  const API_KEY = process.env.REACT_APP_GOOGLE_ID;

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
      console.log(res);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = () => {
    console.log("Google log in was unsucessful , Please try again later");
  };

  return (
    <Container>
      <AppName>
        {" "}
        Havier <span>*</span>
      </AppName>
      <SwitchButtons>
        <Button toggle={toggle} onClick={toggleHandler}>
          Login
        </Button>
        <Button toggle={!toggle} onClick={toggleHandler}>
          Sign Up
        </Button>
      </SwitchButtons>
      <FormPage>{!toggle ? <Login /> : <SignUp />}</FormPage>
      <GoogleLogin
        clientId={API_KEY}
        buttonText="Log In with Google"
        onSuccess={googleSuccess}
        onFailure={googleFailure}
      />
    </Container>
  );
};

export default Auth;
