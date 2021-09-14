import React from "react";
import styled, { css } from "styled-components";
import BannerSlider from "components/molecules/Sliders/BannerSlider";
import ProductSlider from "components/molecules/Sliders/ProductSlider/ProductSlider";
import InfoSection from "components/molecules/InfoSection/InfoSection";
import InfoSectionItem from "components/atoms/InfoSectionItem/InfoSectionItem";
import banner1 from "assets/banner1.jpg";
import banner2 from "assets/banner2.jpg";
import banner3 from "assets/banner3.jpg";
import beer4 from "assets/beer4.jpg";
import { FiPackage } from "react-icons/fi";
import { FaCrown, FaPlane } from "react-icons/fa";
import ProductCard from "components/molecules/ProductCard/ProductCard";
import MainTemplate from "templates/MainTemplate/MainTemplate";

const mainPageImage = css`
  width: 100%;
  height: 500px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
`;

const Slide1 = styled.img`
  ${mainPageImage}
  background-image: url(${banner1});
`;

const Slide2 = styled(Slide1)`
  background-image: url(${banner2});
`;

const Slide3 = styled(Slide1)`
  background-image: url(${banner3});
`;

const MainPageWrapper = styled.div`
  background-color: #ffa500;
`;

const MiddleImage = styled.div`
  ${mainPageImage}
  background-image: url(${beer4});
`;

const WidgetTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: lightgrey;
  padding-top: 15px;
`;

const WidgetTitle = styled.h1`
  font-size: 2em;
  font-family: "Shrikhand", cursive;
`;

const MainPage = () => {
  return (
    <MainTemplate>
      <MainPageWrapper>
        <BannerSlider>
          <Slide1 />
          <Slide2 />
          <Slide3 />
        </BannerSlider>
        <InfoSection>
          <InfoSectionItem
            title="The Best Selection"
            icon={<FaCrown />}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus id lorem id sodales. Nullam scelerisque tellus velit, a tempor eros pharetra vel. Ut tristique velit ligula, at congue magna scelerisque a. "
          />
          <InfoSectionItem
            title={"Worldwide Delivery"}
            icon={<FaPlane />}
            content="Quisque vel euismod enim. Quisque dapibus, felis id aliquam tristique, justo risus maximus magna, vitae rutrum velit neque non ex. Nulla commodo tellus a tempor feugiat. Nam vitae nisl non elit condimentum bibendum."
          />
          <InfoSectionItem
            title="Safe & Discrete Delivery"
            icon={<FiPackage />}
            content="Vestibulum ac lectus et dolor congue congue. Mauris augue neque, varius in nisi a, imperdiet pellentesque est. Aliquam non metus ut ex interdum tincidunt in quis arcu. Cras vel enim nulla."
          />
        </InfoSection>
        <MiddleImage src={beer4} alt="beer" />
        <WidgetTitleWrapper>
          <WidgetTitle>Bestsellers</WidgetTitle>
        </WidgetTitleWrapper>
        <ProductSlider>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductSlider>
      </MainPageWrapper>
    </MainTemplate>
  );
};

export default MainPage;
