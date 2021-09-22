import styled from "styled-components";
import Button from "components/atoms/Button/Button";

export const ProductCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 15px 0 15px 0;
  height: 60vh;
`;

export const ImageWrapper = styled.div`
  width: 100px;
  height: 200px;
  background-image: url(${({ image_url }) => image_url});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
  margin: 10px 0 10px 0;
`;

export const ProductWrapper = styled.div`
  border-radius: 10px;
  width: ${({ isBig }) => (isBig ? "60%" : "14vw")};
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 3px solid transparent;
  -webkit-box-shadow: 4px 1px 15px 5px rgba(0, 0, 0, 0.5);
  box-shadow: 4px 1px 15px 5px rgba(0, 0, 0, 0.5);

  &:hover {
    border: 3px solid lightgreen;
  }
`;

export const ProductName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const StyledButton = styled(Button)`
  background-color: #ffa500;
`;

export const ButtonWrapper = styled.div``;
