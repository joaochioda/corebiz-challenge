import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 80px 80px 0;
  border-color: transparent #f8475f transparent transparent;
  @media (max-width: 800px) {
    border-width: 0 60px 60px 0;
  }
  .off {
    font-size: 16px;
    font-family: "Nunito";
    color: white;
    font-weight: 900;
    position: absolute;
    top: 15px;
    left: 40px;
    @media (max-width: 800px) {
      top: 6px;
      left: 23px;
    }
  }
`;
