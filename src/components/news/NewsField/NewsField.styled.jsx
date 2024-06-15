import styled from "styled-components";

export const ListOfNews = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const PagePlace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContantPlace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
`;

export const ChangeLang = styled.span`
  display: flex;

  width: 100%;

  justify-content: space-between;
`;

export const LangTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`;

export const SelectLang = styled.select`
  background-color: rgb(255, 123, 0);
  color: white;

  border: 1px solid transparent;

  border-radius: 8px;

  @media screen and (min-width: 768px) {
    padding: 4px;
  }

  @media screen and (min-width: 1440px) {
    padding: 8px;
    width: 6%;
  }
`;

export const ButtonLoadMore = styled.button`
  padding: 8px 16px;

  margin: 24px 0;

  background-color: rgba(255, 123, 0, 0.65);
  color: white;

  cursor: pointer;

  border: 1px solid orange;
  border-radius: 8px;

  transition: all 0.25s;

  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: white;
    color: rgba(255, 123, 0, 0.65);
  }

  @media screen and (min-width: 768px) {
    /* padding: 8px 20px; */
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    padding: 20px 32px;
    font-size: 20px;
  }
`;

export const NoNews = styled.p`
  margin: 24px 0;
`;
