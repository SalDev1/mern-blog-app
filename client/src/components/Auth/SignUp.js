import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { signUp } from "../../actions/auth";

const SignUp = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(userData));
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
        name="firstName"
        placeholder="Your First Name"
      />
      <Input
        type="text"
        aria-label="lastName"
        required
        onChange={handleChange}
        name="lastName"
        placeholder="Your Last Name"
      />
      <Input
        type="text"
        aria-label="email"
        required
        onChange={handleChange}
        name="email"
        placeholder="Your Email"
      />
      <Input
        type="password"
        aria-label="password"
        required
        onChange={handleChange}
        name="password"
        placeholder="Your Password"
      />
      <Input
        type="password"
        aria-label="confirmPassword"
        required
        onChange={handleChange}
        name="confirmPassword"
        placeholder="Confirm Your Password"
      />
      <SubmitButton type="submit">Sign Up</SubmitButton>
    </Form>
  );
};

export const Form = styled.form`
  margin-top: 15px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  margin: 10px 0px;
  width: 60%;
  padding: 10px;
  border: none;
  outline-width: 0px;
  border-radius: 4px;
  background-color: #262626;
  color: white;

  &:focus {
    border: 0.5px solid #fc8700;
  }
`;

export const SubmitButton = styled.button`
  margin: 20px 0px;
  width: 64%;
  padding: 10px 30px;
  border-radius: 4px;
  cursor: pointer;
  background-color: #fc8700;
  border: none;
  color: white;
  font-family: "Cabin", serif;
  font-size: 16px;
`;

export default SignUp;
