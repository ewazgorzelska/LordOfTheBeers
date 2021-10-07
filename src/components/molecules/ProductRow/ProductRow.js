import React from "react";
import { useDispatch } from "react-redux";
import ProductQuantity from "../ProductQuantity/ProductQuantity";
import { IoClose } from "react-icons/io5";
import noPhoto from "assets/no-photo.jpg";
import { removeFromCart } from "store/index.js";
import {
  ProductRowWrapper,
  ProductImage,
  ProductName,
  Price,
  RemoveButton,
} from "./ProductRowStyles";

const ProductRow = ({ id, image, name, unitPrice, quantityInCart }) => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ id: id }));
  };

  return (
    <ProductRowWrapper id={id}>
      <ProductImage image={image ? image : noPhoto} />
      <ProductName>{name}</ProductName>
      <ProductQuantity quantityInCart={quantityInCart} id={id} />
      <div>{quantityInCart}</div>
      <Price>{unitPrice}$</Price>
      <RemoveButton onClick={handleRemoveFromCart}>
        <IoClose />
      </RemoveButton>
    </ProductRowWrapper>
  );
};

export default ProductRow;
