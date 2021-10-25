import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppContext } from "context/AppContext";
import {
  ProductContainer,
  Image,
  ProductNameWrapper,
  ProductDescription,
  Title,
  Food,
  ProductPrice,
  StyledButton,
  ButtonWrapper,
} from "./ProductPageStyles";
import {
  addToCart,
  updateQuantityIncrementation,
  updateTotalPrice,
} from "store/index.js";
import CartPreview from "components/organisms/CartPreview/CartPreview";
import { useGetProductsQuery } from "store/index.js";

const ProductPage = () => {
  let { id } = useParams();
  const { data } = useGetProductsQuery();
  const { handleCartPreview, isCartPreviewOpened } = useContext(AppContext);
  const dispatch = useDispatch();
  const dispatch2 = useDispatch();
  const productName = data.find((el) => el.id.toString() === id).name;
  const productImage = data.find((el) => el.id.toString() === id).image_url;
  const productTagline = data.find((el) => el.id.toString() === id).tagline;
  const productDescription = data.find(
    (el) => el.id.toString() === id
  ).description;
  const foodPairing = data.find((el) => el.id.toString() === id).food_pairing;

  const productsInCart = useSelector((state) => state.productsInCart);

  const isProductInCart = (id) => {
    return productsInCart.filter((el) => el.id.toString() === id);
  };

  const handleAddProductToCart = () => {
    isProductInCart(id).length === 0
      ? dispatch(
          addToCart({
            id,
            image: productImage,
            name: productName,
            price: 1,
            quantityInCart: 1,
          })
        )
      : dispatch(updateQuantityIncrementation({ id }));

    dispatch2(updateTotalPrice(1));
    if (!isCartPreviewOpened) handleCartPreview();
  };

  return (
    <>
      <CartPreview />
      <ProductContainer>
        {productImage ? <Image src={productImage} alt="beer" /> : null}
        <ProductNameWrapper>
          <Title>{productName}</Title>
          <h2>{productTagline}</h2>
          <ProductPrice>$1.00</ProductPrice>
          <ButtonWrapper>
            {isProductInCart(id).length === 0 ? (
              <StyledButton onClick={handleAddProductToCart}>
                Add to cart
              </StyledButton>
            ) : (
              <StyledButton second>It's already in your cart</StyledButton>
            )}
          </ButtonWrapper>
        </ProductNameWrapper>
        <ProductDescription>
          <Title>Description</Title>
          <p>{productDescription}</p>
          <Title>Food Pairing</Title>
          <ul>
            {foodPairing.map((el) => (
              <Food key={el}>{el}</Food>
            ))}
          </ul>
        </ProductDescription>
      </ProductContainer>
    </>
  );
};

export default ProductPage;
