import React from "react";
import styled from "styled-components";

const InfoSectionItemWrapper = styled.div`
  background-color: #a9a9a9;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InfoSectionItemTitle = styled.h1`
  font-size: 20px;
  text-align: center;
  font-weight: 800;
  margin-top: 15px;
`;

const InfoSectionItemContent = styled.p`
  margin: 13px 0 20px 10px;
  padding-right: 13px;
  text-align: justify;
  text-justify: inter-word;
`;

const InfoSectionItem = ({ title, icon, content }) => {
  return (
    <InfoSectionItemWrapper>
      <InfoSectionItemTitle>
        {title} {icon}
      </InfoSectionItemTitle>
      <InfoSectionItemContent>{content}</InfoSectionItemContent>
    </InfoSectionItemWrapper>
  );
};

export default InfoSectionItem;
