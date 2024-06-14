import styled from "styled-components";

export const WeatherFieldSpan = styled.span`
  display: block;
  width: 80%;
  height: 80%;
  /* background-color: lightblue; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: repeat(3, 1fr); */
  grid-template-areas:
    "i i i"
    "p w w"
    "p w w";

  background-color: rgba(155, 155, 155, 0.3);
  backdrop-filter: blur(4px);
  border-radius: 24px;
  -webkit-box-shadow: 2px 5px 24px 10px rgba(66, 68, 90, 1);
  -moz-box-shadow: 2px 5px 24px 10px rgba(66, 68, 90, 1);
  box-shadow: 2px 5px 24px 10px rgba(66, 68, 90, 1);

  padding: 8px;
`;

export const BackSpan = styled.span`
  background-image: url(https://cdn.pixabay.com/photo/2023/11/29/17/51/clouds-8420083_1280.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  min-height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const SectionTitle = styled.h2`
  text-align: center;
`;
