import styled from "styled-components";

export const WeatherFieldSpan = styled.span`
  display: block;
  width: 100%;
  height: 35vh;
  /* background-color: lightblue; */
  background-image: url(https://cdn.pixabay.com/photo/2023/10/28/09/20/darling-8346954_960_720.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: repeat(3, 1fr); */
  grid-template-areas:
    "i i i"
    "p w w"
    "p w w";
`;
