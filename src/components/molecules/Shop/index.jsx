import React from 'react';
import { Container } from './style';
import { Badge } from 'antd';
import ShopIcon from '../../../assets/ShopIcon.svg';

export const Shop = () => (
    <Container>
        <Badge count={5} size="small" offset={[10, 10]} >
            <img src={ShopIcon} alt="Carrinho"/>
        </Badge>
    </Container>
);