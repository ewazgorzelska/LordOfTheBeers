import React from 'react';
import styled from 'styled-components';
import GeneralSlider from "components/molecules/Slider/Slider";
import banner1 from 'assets/banner1.jpg';
import banner2 from 'assets/banner2.jpg';
import banner3 from 'assets/banner3.jpg';
import beer4 from 'assets/beer4.jpg';


const Slide1 = styled.img`
    width: 100%;
    height: 500px;
    background-image: url(${banner1});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
`;

const Slide2 = styled(Slide1)`
    background-image: url(${banner2});
`;

const Slide3 = styled(Slide1)`
    background-image: url(${banner3});
`;

const MainPageWrapper = styled.div`
    flex: 1 0 auto;
`;

const MainPage = () => {

    return (
        <MainPageWrapper>
            <GeneralSlider>
                <Slide1/>
                <Slide2/>
                <Slide3/>
            </GeneralSlider>
            <img src={beer4} alt="beer"/>
        </MainPageWrapper>
    )
}

export default MainPage;