import styled from "styled-components";

export const Container = styled.div`
   margin-bottom: 100px;
   .slick-dots li.slick-active button:before {
       color: red;
   }
   .slick-dots {
       bottom: 25px
   }
   .slick-dots li button:before {
        color: lightgray;
   }
`;