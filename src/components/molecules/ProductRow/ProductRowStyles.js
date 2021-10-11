import styled from "styled-components";

const width = 6;

export const ProductRowWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 0.5fr 1fr 1fr;
  align-items: center;
  margin: 2em auto 2em auto;
  gap: 4em;
  width: 80vw;
`;

export const ProductImage = styled.div`
  width: 9vw;
  height: 10vh;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
`;
export const ProductName = styled.div``;

export const Price = styled.div``;

export const RemoveButton = styled.button`
  width: 2vw;
  height: 4vh;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;
