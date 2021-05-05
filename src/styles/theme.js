import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    black: "#000000",
    lightGrey: "#F2F2F2",
    mediumGrey: "#E6E8EA",
    darkGrey: "#7A7A7A",
    placeHolderGrey: "#7A7A7A",
    white: "#FFFFFF",
    red: '#F8475F',
    third: '##333333'
  },
  fonts: ["Nunito", "RoboLatoto"],
  fontSizes: {
    size11: "11px",
    size12: "12px",
    size13: "13px",
    size14: "14px",
    size18: "18px",
    size22: "22px",
    size30: "30px",
    size45: "45px",
  },
  lineHeight: {
    size17: '17.73px',
    size20: '20px',
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;