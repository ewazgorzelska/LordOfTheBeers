import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from 'styles/GlobalStyle';
import NavBar from 'components/NavBar/NavBar';

const MainTemplate = ({ children }) => (
  <div>
    <GlobalStyle />
    <NavBar />
    {children}
  </div>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
