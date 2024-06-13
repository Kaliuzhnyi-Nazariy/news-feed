import styled from "styled-components";
import { Field, Form } from "formik";

export const FieldStyled = styled(Field)`
  display: flex;
  width: 50%;
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

  font-weight: 400;

  &:hover,
  &:focus,
  &:active {
    background-color: rgba(255, 123, 0, 0.6);
    color: white;
    border: 2px rgba(255, 255, 255, 0.3) solid;
  }
`;
