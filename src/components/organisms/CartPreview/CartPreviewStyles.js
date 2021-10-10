import styled from "styled-components";
import { BiLeftArrow } from "react-icons/bi";

const wrapperWidth = 25;

export const PreviewCartContainer = styled.div`
  width: ${wrapperWidth}vw;
  height: 100vh;
  transform: ${({ isCartPreviewOpened }) =>
    isCartPreviewOpened ? `translateX(0)` : `translateX(${wrapperWidth}vw)`};
  transition: transform 0.6s ease-in-out;
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: #f3f3f3;
  z-index: 9999;

  button {
    width: ${wrapperWidth}vw;
    height: 8vh;
    background-color: #121212;
    font-weight: 800;
    color: white;
    display: grid;
    grid-template-columns: 1fr 4fr;
  }
`;

export const ArrowIcon = styled(BiLeftArrow)`
  align-self: center;
  justify-self: center;
`;

export const ButtonContent = styled.div`
  align-self: center;
  justify-self: center;
  text-transform: uppercase;
`;
