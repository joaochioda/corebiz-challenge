import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';

export const OffImage = ({ className }) => (
  <Container className={className}>
    <span className="off">OFF</span>
  </Container>
);

OffImage.prototype = {
  className: PropTypes.string,
};
