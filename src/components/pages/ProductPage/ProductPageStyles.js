import styled from "styled-components";
import Button from "components/atoms/Button/Button";

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 50%;
  margin: 0 auto;
  width: 80vw;
  margin-bottom: 3em;
`;
export const Image = styled.img`
  width: 10vw;
  height: 70vh;
  margin-top: 3em;
  justify-self: start;
`;

export const ProductNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  align-items: stretch;
  align-self: center;
`;

export const ProductDescription = styled.div`
  width: 60vw;
`;

export const Title = styled.h1`
  font-size: 3em;
  font-weight: 800;
  margin: 1em 0 1em 0;
`;

export const Food = styled.li`
  margin: 1em 0 1em 0;
`;

export const ProductPrice = styled.span`
  font-size: 1.5em;
  font-weight: 800;
  margin-top: 15px;
`;

export const StyledButton = styled(Button)`
  height: 10vh;
  width: 12vw;
  font-size: 1em;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  margin: 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3vw;
  margin-top: 5vh;
`;
