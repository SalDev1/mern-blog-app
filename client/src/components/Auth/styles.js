import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  padding: 10px;
  border: 1px solid lightgray;
`;

export const AppName = styled.h1`
  font-size: 24px;
  color: white;
  cursor: pointer;

  span {
    color: #fc8700;
  }
`;

export const SwitchButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  margin-top: 15px;
  padding: 10px 20px;
  border: none;
  color: white;
  font-family: "Cabin", serif;
  cursor: pointer;
  border-bottom: 3px solid
    ${({ toggle }) => (toggle ? "#fc8700" : "transparent")};

  background-color: #141212;
  width: 30%;
  font-size: 18px;
`;

export const FormPage = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;
