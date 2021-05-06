import React, { useState } from 'react';
import { Container, OffImageAbsolute } from './style';
import { Rate, message } from 'antd';
import { saveLocalStorage } from '../../functions/localStorage';
import { useCartContext } from '../../contexts/CartContext';
import PropTypes from 'prop-types';

export const Product = ({ product }) => {
    const [selected, setSelected] = useState(false);
    const { changecartCount } = useCartContext();

    function convertToDecimal(value) {
        return (Math.round(value) / 100).toFixed(2);
    }

    function handleClick () {
        message.success('Produto adicionado ao carrinho');
        changecartCount();
        saveLocalStorage(product.productName)
    }

    return (
        <Container onClick={() => setSelected(!selected)}>
            <div className="image-off">
                <img src={product.imageUrl} alt={product.productName}/>
                {product.listPrice && 
                    <OffImageAbsolute/>
                }
            </div>
            <div className={`selected ${selected}`}>
                <span className="product-name">{product.productName}</span>
                <Rate  
                    style={{ color: '#F8475F', stroke: '#F8475F', strokeWidth: '80px', fontSize: 12 }}
                    allowClear={false} 
                    value={product.stars}
                    className="star"
                    />
                {product.listPrice &&  
                    <span className="old-price">{`de R$ ${convertToDecimal(product.listPrice)}`}</span>
                }
                <span className="actual-price">{`por R$ ${convertToDecimal(product.price)}`}</span>
                {product.installments.length > 0 && 
                    <span className="part">{`ou em ${product.installments[0].quantity}x 
                    de R$${convertToDecimal(product.installments[0].value)}`}
                    </span>
                }
                <button className="button" onClick={() => handleClick()}>COMPRAR</button>
            </div>
        </Container>
)}

Product.propTypes = {
    products: PropTypes.element,
}