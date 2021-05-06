import React from 'react';
import { Container } from './style';

export const TextBorder = ({ text, borderColor, size, weight, color}) => (
    <Container borderColor={borderColor} size={size} weight={weight} color={color}>
       <div className="localization">
            <span>{text}</span>
        </div>
    </Container>
);