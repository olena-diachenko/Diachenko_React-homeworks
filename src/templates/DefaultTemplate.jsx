import React from 'react';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import Header from '../components/Header';

const DefaultTemplate = ({ children }) => (
  <>
    <Header />
    <Container>{children}</Container>
  </>
);

DefaultTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default DefaultTemplate;
