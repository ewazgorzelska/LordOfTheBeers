import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from 'styles/GlobalStyle';
import NavBar from 'components/organisms/NavBar/NavBar';
import Footer from 'components/organisms/Footer/Footer';

const MainTemplate = ({children}) => (
  <div>
    <GlobalStyle />
    <NavBar />
    {children}
    <Footer />
  </div>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
