import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "context/AppContext";
import CartPreviewRow from "components/molecules/CartPreviewRow/CartPreviewRow";
import {
  PreviewCartContainer,
  ArrowIcon,
  ButtonContent,
} from "./CartPreviewStyles";

const CartPreview = () => {
  const { isCartPreviewOpened, handleCartPreview } = useContext(AppContext);
  const productsInCart = useSelector((state) => state.productsInCart);

  return (
    <PreviewCartContainer isCartPreviewOpened={isCartPreviewOpened}>
      <button onClick={handleCartPreview}>
        <ArrowIcon />
        <ButtonContent>continue shopping</ButtonContent>
      </button>
      {productsInCart.map(({ id, image, name, price, quantityInCart }) => (
        <CartPreviewRow
          key={id}
          id={id}
          image={image}
          name={name}
          price={price}
          quantityInCart={quantityInCart}
        />
      ))}
    </PreviewCartContainer>
  );
};

export default CartPreview;
