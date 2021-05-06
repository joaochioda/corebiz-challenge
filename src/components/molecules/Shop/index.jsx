import React from "react";
import { Container } from "./style";
import { Badge } from "antd";
import ShopIcon from "../../../assets/ShopIcon.svg";
import { useCartContext } from "../../contexts/CartContext";

export const Shop = () => {
  const { cartCount } = useCartContext();
  return (
    <Container>
      <Badge count={cartCount} size="small" offset={[10, 10]}>
        <img src={ShopIcon} alt="Carrinho" />
      </Badge>
    </Container>
  );
};
