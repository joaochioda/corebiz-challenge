import React from "react";
import { Container } from "./style";
import { TextBorder } from "../../atoms/TextBorder";
export const Localization = () => (
  <Container>
    <TextBorder text={"Localização"} borderColor={"white"} />
    <ul>
      <li>Avenida Andrômeda, 2000. Bloco 6 e 8</li>
      <li>Alphavile SP</li>
      <li>brasil@corebiz.ag</li>
      <li>+55 11 3090 1039</li>
    </ul>
  </Container>
);
