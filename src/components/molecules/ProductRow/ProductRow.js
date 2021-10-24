import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductQuantity from "../ProductQuantity/ProductQuantity";
import { IoClose } from "react-icons/io5";
import noPhoto from "assets/no-photo.jpg";
import { removeFromCart, updateTotalPrice } from "store/index.js";
import {
  ProductRowWrapper,
  ProductImage,
  ProductName,
  Price,
  RemoveButton,
} from "./ProductRowStyles";

const ProductRow = ({ id, image, name, unitPrice, quantityInCart }) => {
  const dispatch = useDispatch();
  const dispatch2 = useDispatch();
  const price = unitPrice * quantityInCart;

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ id: id }));
    dispatch2(updateTotalPrice(-quantityInCart));
  };

  return (
    <ProductRowWrapper id={id}>
      <Link to={`/product/${id}`}>
        <ProductImage image={image ? image : noPhoto} />
      </Link>
      <Link to={`/product/${id}`}>
        <ProductName>{name}</ProductName>
      </Link>
      <ProductQuantity quantityInCart={quantityInCart} id={id} />
      <Price>{price} $</Price>
      <RemoveButton onClick={handleRemoveFromCart}>
        <IoClose />
      </RemoveButton>
    </ProductRowWrapper>
  );
};

export default ProductRow;
