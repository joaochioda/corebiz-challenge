import React from "react";
import { Container } from "./style";

export const Search = () => (
  <Container>
    <input className="input" placeholder="O que está procurando?" type="text" />
    <div className="icon" />
  </Container>
);
