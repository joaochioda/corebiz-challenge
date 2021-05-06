import React from "react";
import { Container } from "./style";
import Banner1 from "../../../assets/Banner1.svg";
import Banner2 from "../../../assets/Banner2.svg";
import { TextBanner } from "../../atoms/TextBanner";
const width = 400;

export const Banner = () => (
  <Container width={width}>
    <div className="images">
      <div style={{ width: "100%" }}>
        <img src={Banner1} alt="Banner Preto" />
        <TextBanner />
      </div>
      <img src={Banner2} alt="Banner mao segurando cartao" />
    </div>
  </Container>
);
