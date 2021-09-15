import styled from "styled-components";
import { data } from "data/data";

const imageURL = data[0].image_url;

export const ProductCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 15px 0 15px 0;
`;

export const ImageWrapper = styled.div`
  width: 100px;
  height: 200px;
  background-image: url(${imageURL});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  margin-top: 10px;
`;

export const ProductWrapper = styled.div`
  border-radius: 10px;
  width: 60%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid transparent;
  -webkit-box-shadow: 4px 1px 15px 5px rgba(0, 0, 0, 0.5);
  box-shadow: 4px 1px 15px 5px rgba(0, 0, 0, 0.5);

  &:hover {
    border: 3px solid lightgreen;
  }
`;
