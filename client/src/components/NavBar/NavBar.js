import React, { useEffect } from "react";
import {
  Container,
  AppName,
  NavLinks,
  NavLink,
  UserProfile,
  UserName,
} from "./styles";
import { Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

const NavBar = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logoutHandler();
    }
  });

  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/auth");
  };

  return (
    <Container>
      <AppName onClick={() => history.push("/")}>
        Havier <span>*</span>
      </AppName>
      <NavLinks>
        <NavLink to="/">All Blogs</NavLink>
        <NavLink to="/createblog">Create a Blog</NavLink>
      </NavLinks>
      <UserProfile onClick={logoutHandler}>
        <Avatar src={user?.result?.imageUrl} alt={user?.result?.name} />
        <UserName>{user?.result?.name}</UserName>
      </UserProfile>
    </Container>
  );
};

export default NavBar;
