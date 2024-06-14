import styled from "styled-components";

export const InfoFieldStyle = styled.span`
  grid-area: w;
  align-self: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 36px;
  }

  @media screen and (min-width: 1440px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0;
    justify-content: space-evenly;
  }
`;

export const ListOfInfo = styled.ul`
  display: flex;
  list-style: none;
  color: white;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media screen and (min-width: 375px) and (max-width: 1439px) {
    gap: 16px;
    justify-content: space-evenly;
  }

  @media screen and (min-width: 1440px) {
    flex-wrap: nowrap;
    li:not(:nth-child(-n + 1)) {
      margin: 0 16px;
    }
    li:nth-child(-n + 2) {
      margin-left: 0;
    }
  }
`;

export const ItemOfInfo = styled.li`
  display: flex;
  flex-direction: column;
`;

export const ItemOfInfoSpecial = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1439px) {
    width: 64px;
    /* width: calc((100% / 2) - 48px); */
  }
`;
