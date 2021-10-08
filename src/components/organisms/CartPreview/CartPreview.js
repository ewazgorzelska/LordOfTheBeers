import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { AppContext } from "context/AppContext";

const PreviewCartContainer = styled.div`
  height: 100%;
  width: 40%;
  background-color: violet;
  position: absolute;
  z-index: 9999;
  right: 0;
  transition: width 5s linear;

  button {
    width: 200px;
    height: 100px;
    border: 1px solid black;
    background-color: yellow;
  }
`;

const CartPreview = () => {
  const { isCartPreviewOpened, handleCartPreview } = useContext(AppContext);

  if (isCartPreviewOpened) {
    return ReactDOM.createPortal(
      <CSSTransition>
        <PreviewCartContainer isCartPreviewOpened>
          <button onClick={handleCartPreview}>close</button>
        </PreviewCartContainer>
      </CSSTransition>,
      document.querySelector("#modal-root")
    );
  } else return null;
};

export default CartPreview;
