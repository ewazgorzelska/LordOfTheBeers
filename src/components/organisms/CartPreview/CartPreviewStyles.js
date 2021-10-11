import styled, {css} from "styled-components";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

const wrapperWidth = 30;

const buttons = css`
  width: ${wrapperWidth}vw;
  height: 8vh;
  background-color: #121212;
  font-weight: 800;
  display: grid;
`;

export const PreviewCartContainer = styled.div`
  width: ${wrapperWidth}vw;
  height: 100vh;
  transform: ${({ isCartPreviewOpened }) =>
    isCartPreviewOpened ? `translateX(0)` : `translateX(${wrapperWidth}vw)`};
  transition: transform 0.6s ease-in-out;
  position: absolute;
  right: 0;
  top: ${({ offset }) => `${offset}px`};
  background-color: #f3f3f3;
  z-index: 9999;
`;

export const CartPreviewRowWrapper = styled.div`
  height: 84vh;
  overflow: scroll;
`;

export const CartPreviewButton = styled.button`
  ${buttons}
  color: white;
  grid-template-columns: 1fr 4fr;
`;

export const StyledCartPreviewButton = styled(Link)`
  ${buttons}
  color: #ffa500;
  grid-template-columns: 4fr 1fr;
`;

export const LeftArrowIcon = styled(BiLeftArrow)`
  align-self: center;
  justify-self: center;
`;

export const RightArrowIcon = styled(BiRightArrow)`
    align-self: center;
    justify-self: center;
`;

export const ButtonContent = styled.div`
  align-self: center;
  justify-self: center;
  text-transform: uppercase;
`;
