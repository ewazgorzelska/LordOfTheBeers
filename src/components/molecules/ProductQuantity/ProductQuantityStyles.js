import styled from "styled-components";

export const ProductQuantityContainer = styled.div`
  height: ${({ isBig }) => (isBig ? "10vh" : "4vh")};
  width: ${({ isBig }) => (isBig ? "12vw" : "8vw")};
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;

  input {
    width: ${({ isBig }) => (isBig ? "4vw" : "3vw")};
    text-align: center;
  }
`;

export const StyledButton = styled.button`
  width: 4vw;
  height: ${({ isBig }) => (isBig ? "10vh" : "4vh")};
  font-size: ${({ isBig }) => (isBig ? "12em" : "1em")};
  color: white;
  background-color: green;
  text-align: center;
`;
