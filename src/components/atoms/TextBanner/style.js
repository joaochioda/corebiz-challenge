import styled from "styled-components";

export const Container = styled.div`
   color: white;
   font-family: 'Nunito';
   p:first-child {
      font-size: 20px;
      font-weight: 700;
   }
   p:last-child {
      font-size: 35px;
      font-weight: 900;
      line-height: 30px;
      width: 370px;
      @media(max-width: 800px) {
         font-size: 25px;
     }
   }
`;