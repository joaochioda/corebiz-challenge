import React from "react";
import { Container } from "./style";
import Logo from "../../../assets/Logo.svg";
import ExpandableIcon from "../../../assets/ExpandableIcon.svg";
import MinhaConta from "../../../assets/MinhaConta.svg";
import { Search } from "../../molecules/Search";
import { Shop } from "../../molecules/Shop";

export const Header = () => (
  <Container>
    <img src={ExpandableIcon} alt="Expandir" className="expandable-icon" />
    <div className="logo-icon">
      <img src={Logo} alt="Corebiz" />
    </div>
    <div className="search">
      <Search />
    </div>
    <img src={MinhaConta} alt="Minha conta" className="my-account" />
    <div className="shop">
      <Shop />
    </div>
  </Container>
);
