import styled from "styled-components";

const Button = styled.button`
  width: ${({ isBig }) => (isBig ? "65%" : "30%")};
  height: ${({ isBig }) => (isBig ? "4vh" : "10vh")};
  text-transform: uppercase;
  cursor: pointer;
  font-size: 0.75em;
  border-radius: 10px;
  color: white;
  margin: 15px 0 15px 0;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Button;
