import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  position: sticky;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #262626;
  color: white;
  padding: 0px 10px;
  margin: 0;
  padding: 0;
`;

export const AppName = styled.h1`
  font-size: 24px;
  color: white;
  cursor: pointer;

  span {
    color: #fc8700;
  }
`;

export const NavLinks = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const NavLink = styled(LinkR)`
  text-align: center;
  padding: 10px;
  text-decoration: none;
  outline: none;
  color: white;
  font-size: 16px;
  margin: 0px;

  &:hover {
    color: #fc8700;
    cursor: pointer;
  }
`;

export const UserProfile = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;

  .MuiAvatar-root {
    width: 40px;
    height: 40px;
  }
`;

export const UserName = styled.p`
  padding-left: 10px;
  font-size: 14px;
`;
