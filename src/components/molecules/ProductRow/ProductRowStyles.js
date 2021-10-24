import styled from "styled-components";

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
  cursor: pointer;
`;
export const ProductName = styled.div`
  cursor: pointer;
`;

export const Price = styled.div`
  /* font-weight: 800; */
`;

export const RemoveButton = styled.button`
  width: 2vw;
  height: 4vh;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;
