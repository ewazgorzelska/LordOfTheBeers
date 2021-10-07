import React, { useContext, useState } from "react";
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
import MainTemplate from "templates/MainTemplate/MainTemplate";
import ProductQuantity from "components/molecules/ProductQuantity/ProductQuantity";
import { addToCart, updateQuantityIncrementation } from "store/index.js";

const ProductPage = () => {
  const { products } = useContext(AppContext);
  let { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const productName = products.find((el) => el.id.toString() === id).name;
  const productImage = products.find((el) => el.id.toString() === id).image_url;

  const productTagline = products.find((el) => el.id.toString() === id).tagline;
  const productDescription = products.find(
    (el) => el.id.toString() === id
  ).description;
  const foodPairing = products.find(
    (el) => el.id.toString() === id
  ).food_pairing;

  const handlePassQuantity = (quantity) => {
    setQuantity(quantity);
  };

  const productsInCart = useSelector((state) => state.productsInCart);

  const isProductInCart = (id) => {
    return productsInCart.filter((el) => el.id === id);
  };

  const handleAddProductToCart = () => {
    isProductInCart(id).length === 0
      ? dispatch(
          addToCart({
            id,
            image: productImage,
            name: productName,
            price: 2.0,
            quantityInCart: quantity + 1,
          })
        )
      : dispatch(updateQuantityIncrementation({ id }));
  };

  return (
    <MainTemplate>
      <ProductContainer>
        {productImage ? <Image src={productImage} alt="beer" /> : null}
        <ProductNameWrapper>
          <Title>{productName}</Title>
          <h2>{productTagline}</h2>
          <ProductPrice>$1.00</ProductPrice>
          <ButtonWrapper>
            <ProductQuantity handlePassQuantity={handlePassQuantity} />
            <StyledButton onClick={handleAddProductToCart}>
              Add to cart
            </StyledButton>
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
    </MainTemplate>
  );
};

export default ProductPage;
