import styled from "styled-components";

export const PictureInfoField = styled.div`
  display: grid;
  grid-area: p;
  align-self: center;
  justify-self: center;
  justify-items: center;
`;

export const MainWeatherInfo = styled.span`
  font-weight: 700;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 42px;
  }
`;

export const DescriptionWeatherInfo = styled.span`
  font-weight: 400;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;
