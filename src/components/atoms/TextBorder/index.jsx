import React from "react";
import { Container } from "./style";
import PropTypes from "prop-types";

export const TextBorder = ({ text, borderColor, size, weight, color }) => (
  <Container
    borderColor={borderColor}
    size={size}
    weight={weight}
    color={color}
  >
    <div className="localization">
      <span>{text}</span>
    </div>
  </Container>
);

TextBorder.propTypes = {
  text: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  size: PropTypes.string,
  weight: PropTypes.number,
  color: PropTypes.string,
};
