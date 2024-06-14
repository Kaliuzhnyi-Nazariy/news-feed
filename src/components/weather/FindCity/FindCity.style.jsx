import styled from "styled-components";
import { Field, Form } from "formik";

export const FieldStyled = styled(Field)`
  display: flex;
  width: 60%;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 8px 12px;
  border: 2px white solid;
  border-radius: 16px;

  font-weight: 700;

  &:hover,
  &:focus,
  &:active {
    background-color: rgba(255, 255, 255, 0.6);
    border: 2px rgba(255, 123, 0, 0.3) solid;
    outline: rgba(255, 123, 0, 0.3);
  }

  @media screen and (min-width: 425px) {
    width: 70%;
  }

  @media screen and (min-width: 1440px) {
    padding: 12px;
  }
`;

export const FormStyled = styled(Form)`
  display: flex;
  grid-area: i;
  height: 50%;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 8px;
`;

export const SearchButton = styled.button`
  padding: 8px;
  background-color: rgba(255, 255, 255);
  border: 2px white solid;
  border-radius: 16px;

  font-weight: 200;
  font-size: 10px;

  &:hover,
  &:focus,
  &:active {
    background-color: rgba(255, 123, 0, 0.6);
    color: white;
    border: 2px rgba(255, 255, 255, 0.3) solid;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;

    padding: 12px;
  }
`;
