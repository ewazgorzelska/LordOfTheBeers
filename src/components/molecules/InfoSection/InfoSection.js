import React from "react";
import styled from "styled-components";

const InfoSectionWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const InfoSection = ({ children }) => {
  return <InfoSectionWrapper>{children}</InfoSectionWrapper>;
};

export default InfoSection;
