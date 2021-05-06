import styled from "styled-components";
import { OffImage } from '../../atoms/OffImage';

export const OffImageAbsolute = styled(OffImage)`
    position: absolute;
    left: 120px;
    top: 0px;
    @media(max-width: 800px) {
        left: 70px;
        top: 0px;
     }
`

export const Container = styled.div`
    padding: 5px;
    font-family: 'Nunito';
    display:flex;
    flex-direction: column;
    align-items: center;
    .image-off {
        img {
            width: 216px;
            @media(max-width: 800px) {
                width: 132px;
            }
        }
        position: relative;
    }
   
    .selected {
        display:flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    .product-name {
        padding-top: 5px;
        font-size: 12px;
        line-height: 16px;
        color: #7A7A7A;
    }
    .star{
        padding-top: 3px;
        padding-bottom: 5px;
    }
    .old-price {
        font-size: 12px;
        line-height: 16px;
        color: #7A7A7A;
        text-decoration: line-through;
    }
    .actual-price {
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
    }
    .part {
        font-weight: 400;
        font-size: 11px;
        line-height: 15px;
        color: #7A7A7A;
    }
    .button {
        font-weight: 700;
        font-size: 12px;
        color: white;
        background: #000000;
        border-radius: 5px;
        width: 125px;
        margin-top: 10px;
        margin-bottom: 10px;
        display: none;
        cursor: pointer;
    }
    &:hover {
        .selected {
            background: #E6E8EA;
        }
        .button {
            display: unset;
        }
    }
    @media(max-width: 800px) {
        .selected.true {
            background: #E6E8EA;
            .button {
                display: unset;
            }
       }
       .selected.false {
        background: white;
        .button {
            display: none;
        }
   }
    }
  
`;