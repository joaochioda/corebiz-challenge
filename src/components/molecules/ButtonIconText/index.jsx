import React from 'react';
import { Container } from './style';
import PropTypes from 'prop-types';

export const ButtonIconText = ({image, text}) => (
    <Container image={image}>
        <img src={image} alt="Corebiz" />    
        {text}
    </Container>
);

ButtonIconText.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}