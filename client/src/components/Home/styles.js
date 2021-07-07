import styled from "styled-components";

export const ContainerGrid = styled.div`
  margin: 50px;
  height: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .MuiCircularProgress-root {
    text-align: center;
    color: #fc8700;
    width: 10em;
  }
`;

export const ProgressBar = styled.div`
  margin-top: 10px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
