import React from 'react';
import { Container } from './style';

export const ButtonIconText = ({image, text}) => (
    <Container image={image}>
        <img src={image} alt="Corebiz" />    
        {text}
    </Container>
);