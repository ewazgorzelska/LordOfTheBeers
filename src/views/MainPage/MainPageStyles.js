import styled, { css } from "styled-components";
import banner1 from "assets/banner1.jpg";
import banner2 from "assets/banner2.jpg";
import banner3 from "assets/banner3.jpg";
import beer4 from "assets/beer4.jpg";

export const mainPageImage = css`
  width: 100%;
  height: 500px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
`;

export const Slide1 = styled.img`
  ${mainPageImage}
  background-image: url(${banner1});
`;

export const Slide2 = styled(Slide1)`
  background-image: url(${banner2});
`;

export const Slide3 = styled(Slide1)`
  background-image: url(${banner3});
`;

export const MainPageWrapper = styled.div`
  background-color: #ffa500;
`;

export const MiddleImage = styled.div`
  ${mainPageImage}
  background-image: url(${beer4});
`;

export const WidgetTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: lightgrey;
  padding-top: 15px;
`;

export const WidgetTitle = styled.h1`
  font-size: 2em;
  font-family: "Shrikhand", cursive;
`;
