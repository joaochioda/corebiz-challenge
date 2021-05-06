import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextBorder } from "../components/atoms/TextBorder";
import { OffImage } from "../components/atoms/OffImage";
import { TextBanner } from "../components/atoms/TextBanner";
import { Header } from "../components/organisms/Header";
import { Footer } from "../components/organisms/Footer";
import { Product } from "../components/molecules/Product";
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

  describe("Testing Product click", () => {
    const product = {
      productId: 1,
      productName: "SAPATO FLOATER PRETO",
      stars: 1,
      imageUrl: "https://corebiz-test.herokuapp.com/images/product-1.png",
      listPrice: null,
      price: 25990,
      installments: [
        {
          quantity: 9,
          value: 2887,
        },
      ],
    };

    it("should not render button comprar", () => {
      render(<Product product={product} />);
      expect(screen.getByText("COMPRAR")).not.toBeVisible();
    });

    it("should render button comprar when click(mobile)", async () => {
      const { getByText, container } = render(<Product product={product} />);
      const area = getByText("SAPATO FLOATER PRETO");
      expect(container.getElementsByClassName("selected false").length).toBe(1);
      userEvent.click(area);
      expect(container.getElementsByClassName("selected true").length).toBe(1);
    });
  });
});
