import React from "react";
import { Container } from "./style";
import Slider from "react-slick";
import { Product } from "../Product";
import { TextBorder } from "../../atoms/TextBorder";
import { Spin } from "antd";
import PropTypes from "prop-types";

export const CarrouselProducts = ({ products, loading }) => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 899,
        settings: {
          arrows: false,
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Spin />
      </div>
    );
  }

  return (
    <Container>
      <TextBorder
        text={"Mais Vendidos"}
        borderColor={"#C0C0C0"}
        size={"20px"}
        weight={900}
        color={"black"}
      />
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.productId}>
            <Product product={product} />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

CarrouselProducts.propTypes = {
  products: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};
