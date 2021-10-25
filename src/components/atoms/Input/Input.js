import styled from "styled-components";

export const Input = styled.input`
  padding: 10px 12px;
  width: 25vw;
  height: 7vh;
  border: 1px solid lightgrey;
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 15px;
  font-size: 1em;
  resize: none;

  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;
