import styled from "styled-components";

export const Container = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  margin-top: 50px;
  padding: 0px 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const HeadTitle = styled.h1`
  font-size: 32px;

  span {
    color: #fc8700;
  }
`;

export const FormPage = styled.form`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;
  width: 100%;
`;

export const Input = styled.input`
  margin: 10px 0px;
  width: 50%;
  padding: 10px;
  border: none;
  outline-width: 0px;
  border-radius: 4px;

  &:focus {
    border: 1px solid #fc8700;
    box-shadow: 0 4px 8px 0 #fc8700, 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const TextArea = styled.textarea`
  margin-top: 10px;
  padding: 10px;
  border-radius: 4px;
  width: 50%;
  border: none;
  outline: none;

  &:focus {
    border: 1px solid #fc8700;
    box-shadow: 0 4px 8px 0 #fc8700, 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const ImagePicker = styled.div`
  margin-top: 20px;
  width: 50%;
  display: flex;
  align-items: flex-end;
`;

export const Buttons = styled.div`
  margin-top: 20px;
  width: 50%;
  display: flex;
  align-items: center;
`;

export const SubmitButton = styled.button`
  font-weight: bold;
  width: 100px;
  padding: 10px 25px;
  color: #fc8700;
  background-color: #141212;
  border: 2px solid #fc8700;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #fc8700;
    color: white;
  }
`;

export const ClearButton = styled.button`
  margin-left: 15px;
  font-weight: bold;
  width: 100px;
  padding: 10px 25px;
  color: red;
  background-color: #141212;
  border: 2px solid red;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: red;
    color: white;
  }
`;
