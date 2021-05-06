import React from "react";
import { Container } from "./style";
import Slider from "react-slick";
import { Banner } from "../Banner";

var settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const CarrouselBanner = () => (
  <Container>
    <Slider {...settings}>
      <div>
        <Banner />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Banner />
      </div>
    </Slider>
  </Container>
);
