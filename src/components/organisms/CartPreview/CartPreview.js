import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "context/AppContext";
import CartPreviewRow from "components/molecules/CartPreviewRow/CartPreviewRow";
import {
  PreviewCartContainer,
  LeftArrowIcon,
  RightArrowIcon,
  ButtonContent,
  CartPreviewButton,
  CartPreviewRowWrapper,
  StyledCartPreviewButton,
} from "./CartPreviewStyles";

const CartPreview = () => {
  const { isCartPreviewOpened, handleCartPreview, offset } =
    useContext(AppContext);
  const productsInCart = useSelector((state) => state.productsInCart);

  return (
    <PreviewCartContainer
      isCartPreviewOpened={isCartPreviewOpened}
      offset={offset}
    >
      <CartPreviewButton onClick={handleCartPreview}>
        <LeftArrowIcon />
        <ButtonContent>continue shopping</ButtonContent>
      </CartPreviewButton>
      <CartPreviewRowWrapper>
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
      </CartPreviewRowWrapper>
      <StyledCartPreviewButton to={`/cart`} onClick={handleCartPreview}>
        <ButtonContent>checkout</ButtonContent>
        <RightArrowIcon />
      </StyledCartPreviewButton>
    </PreviewCartContainer>
  );
};

export default CartPreview;
