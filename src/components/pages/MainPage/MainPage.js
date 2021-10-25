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
import { infoSectionData } from "data/data";
import CartPreview from "components/organisms/CartPreview/CartPreview";
import { useGetProductsQuery } from "store/index.js";

const MainPage = () => {
  const { data, isLoading } = useGetProductsQuery();

  return (
    <>
      <CartPreview />
      <MainPageWrapper>
        <BannerSlider>
          <Slide1 />
          <Slide2 />
          <Slide3 />
        </BannerSlider>
        <InfoSection>
          {infoSectionData.map(({ id, title, icon, content }) => (
            <InfoSectionItem
              key={id}
              title={title}
              icon={icon}
              content={content}
            />
          ))}
        </InfoSection>
        <MiddleImage />
        <WidgetTitleWrapper>
          <WidgetTitle>Bestsellers</WidgetTitle>
        </WidgetTitleWrapper>
        <ProductSlider>
          {isLoading ? (
            <h2>Loading...</h2>
          ) : (
            data
              .slice(0, 5)
              .map(({ id, name, image_url }) => (
                <ProductCard
                  key={id}
                  id={id.toString()}
                  name={name}
                  image_url={image_url}
                />
              ))
          )}
        </ProductSlider>
      </MainPageWrapper>
    </>
  );
};

export default MainPage;
