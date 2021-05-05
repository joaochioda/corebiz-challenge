import React from 'react';
import { Container } from './style';
import SearchIcon from '../../../assets/SearchIcon.svg';

export const Search = () => (
    <Container>
        <input placeholder="O que está procurando?"/>
        <img src={SearchIcon} alt="Icone busca"/>
    </Container>
);