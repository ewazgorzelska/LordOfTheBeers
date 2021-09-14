import React from "react";
import PropTypes from "prop-types";
import GlobalStyle from "styles/GlobalStyle";
import NavBar from "components/organisms/NavBar/NavBar";
import Footer from "components/organisms/Footer/Footer";

const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
