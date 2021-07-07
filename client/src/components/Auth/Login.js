import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signIn } from "../../actions/auth";
import { Form, Input, SubmitButton } from "./SignUp";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    dispatch(signIn(userData));
    history.push("/");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        required
        onChange={handleChange}
        aria-label="firstName"
        name="email"
        placeholder="Your Email"
      />
      <Input
        type="password"
        aria-label="lastName"
        required
        onChange={handleChange}
        name="password"
        placeholder="Your Password"
      />
      <SubmitButton type="submit">Login</SubmitButton>
    </Form>
  );
};

export default Login;
