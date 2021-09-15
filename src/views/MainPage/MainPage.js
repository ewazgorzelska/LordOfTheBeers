import React from "react";
import BannerSlider from "components/molecules/Sliders/BannerSlider";
import ProductSlider from "components/molecules/Sliders/ProductSlider/ProductSlider";
import InfoSection from "components/molecules/InfoSection/InfoSection";
import InfoSectionItem from "components/molecules/InfoSectionItem/InfoSectionItem";
import {
  Slide1,
  Slide2,
  Slide3,
  MainPageWrapper,
  MiddleImage,
  WidgetTitleWrapper,
  WidgetTitle,
} from "./MainPageStyles.js";
import ProductCard from "components/molecules/ProductCard/ProductCard";
import MainTemplate from "templates/MainTemplate/MainTemplate";
import { infoSectionData } from "data/data";

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
          {infoSectionData.map((item) => (
            <InfoSectionItem
              key={item.id}
              title={item.title}
              icon={item.icon}
              content={item.content}
            />
          ))}
        </InfoSection>
        <MiddleImage />
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
