import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 30px;
  .slick-next {
    background: url('/ArrowRight.svg') center center no-repeat!important;
    &::before {
      display: none;
    }
  }
  .slick-prev {
    background: url('/Arrow.svg') center center no-repeat!important;
    &::before {
      display: none;
    }
  }
  margin-bottom: 50px;
  
`;