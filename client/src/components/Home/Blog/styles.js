import styled from "styled-components";

export const Card = styled.div`
  margin: 10px;
  width: 350px;
  height: fit-content;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
`;

export const ThumbNail = styled.div`
  width: 100%;
  position: relative;
`;

export const CardImage = styled.img`
  height: 250px;
  object-fit: cover;
  width: 100%;
  display: block;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const CardContent = styled.div`
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const CardTags = styled.div`
  margin: 10px 0px;
  height: 20px;
  width: 100%;
  display: flex;
  align-items: center;

  p {
    color: #f58700;
    padding-right: 10px;
  }
`;

export const CardTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.1;
`;

export const CardText = styled.p`
  width: 80%;
  height: 80%;
  margin-top: 15px;
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Credientials = styled.div`
  width: 90%;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .MuiSvgIcon-root {
    color: red;
    cursor: pointer;
  }
`;

export const Div1 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardAuthor = styled.h5`
  font-size: 16px;
`;

export const CardDate = styled.p`
  margin-top: 5px;
  padding-right: 10px;
  font-size: 12px;
`;

export const UpdateButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 100;
  cursor: pointer;

  .MuiSvgIcon-root {
    color: white;
  }
`;
