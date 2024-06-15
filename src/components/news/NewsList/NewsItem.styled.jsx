import styled from "styled-components";

export const StyleLi = styled.li`
  padding: 8px;
  border: 1px solid lightgray;
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    width: calc((100% / 2) - 32px);
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
  }
`;

export const ListItemA = styled.a`
  display: flex;
  text-decoration: none;
  flex-direction: column;
  align-items: center;

  color: black;

  width: 100%;
  height: 100%;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 24px;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 80%;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const NewsHeader = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NewsTitle = styled.h3`
  font-weight: 700;
  font-size: 16px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`;

export const DatePublishing = styled.span`
  font-weight: 400;
  color: #c4c4c4;
  font-size: 10px;

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;

export const ImgStyle = styled.img`
  width: 80%;
  height: 180px;
  max-height: 180px;
  height: fit-content;
  object-fit: contain;

  border-radius: 8px;

  @media screen and (min-width: 768px) {
    max-height: 200px;
    height: fit-content;
    width: 200px;
  }

  @media screen and (min-width: 1440px) {
    width: 350px;
    max-height: 250px;
    height: fit-content;
    object-fit: contain;
    margin: -8px;
  }
`;
