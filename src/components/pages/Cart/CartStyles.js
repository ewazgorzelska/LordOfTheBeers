import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 80vw;
  margin: 0 auto 0 auto;
`;

export const ProductsInCartWrapper = styled.div`
  height: 80vh;
  overflow-y: ${({ productsInCart }) =>
    productsInCart.length > 0 ? "scroll" : "unset"};
`;

export const EmptyCartInfo = styled.p`
  margin: 3em 0 3em 0;
`;

export const TotalPriceWrapper = styled.div`
  display: grid;
  grid-template-columns: 6fr 4fr;
  gap: 4em;
  align-items: center;
  margin-top: 3em;
  width: 80vw;
  font-weight: 800;
`;

export const TotalPriceTitle = styled.h1`
  font-size: 1.5em;
  justify-self: end;
`;
