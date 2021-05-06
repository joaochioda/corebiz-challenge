import React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  screen,
} from "@testing-library/react";
import { TextBorder } from "../components/atoms/TextBorder";
import { OffImage } from "../components/atoms/OffImage";
import { TextBanner } from "../components/atoms/TextBanner";
import { Header } from "../components/organisms/Header";
import { Footer } from "../components/organisms/Footer";
import Theme from "../styles/theme";

import { CartContextProvider } from "../components/contexts/CartContext";

describe("Rendering atoms components", () => {
  it("should render text with border correctly", () => {
    const { container } = render(
      <TextBorder text={"teste"} borderColor={"red"} />
    );
    expect(container).toHaveTextContent("teste");
  });

  it("should render off image correctly", () => {
    const { container } = render(<OffImage />);
    expect(container).toHaveTextContent("OFF");
  });

  it("should render <p> banner correctly", () => {
    const { container } = render(<TextBanner />);
    expect(container).toHaveTextContent("Olá, o que você está buscando?");
    expect(container).toHaveTextContent("Criar ou migrar seu e-commerce?");
  });
});

describe("Testing localstorage", () => {
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => null),
      },
      writable: true,
    });
  });
  it("should has been called once when context is create", () => {
    render(<CartContextProvider />);
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
  });

  describe("Testing header and footer", () => {
    it("should render header correctly", () => {
      render(
        <Theme>
          <Header />
        </Theme>
      );
      expect(screen.getByAltText("Corebiz")).toBeInTheDocument();
      expect(screen.getByAltText("Carrinho")).toBeInTheDocument();
      expect(screen.getByAltText("Minha conta")).toBeInTheDocument();
      expect(
        screen.getByPlaceholderText("O que está procurando?")
      ).toBeInTheDocument();
    });

    it("should render footer correctly", () => {
      const { container } = render(
        <Theme>
          <Footer />
        </Theme>
      );
      expect(screen.getAllByAltText("Corebiz")[0]).toBeInTheDocument();
      expect(screen.getByAltText("logos")).toBeInTheDocument();
      expect(container).toHaveTextContent("ENTRE EM CONTATO");
      expect(container).toHaveTextContent("FALE COM O NOSSO CONSULTOR ONLINE");
    });
  });
});
