import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    img:first-child {
        z-index: 1;
        width: 55%;
        @media(max-width: 800px) {
            width: 90%;
        }
    }
    img:last-child {
        width: 56%;
        position: absolute;
        left: calc(50%);
        z-index: -1;
        @media(max-width: 800px) {
            z-index: 2;
            width: 100%;
            left: 0;
            filter: brightness(0.5);
        }
    }

   .images {
        overflow: hidden;
        display: flex;
        width: 100%;
        position: relative;
        p:first-child {
            top: calc(25%);
            left: calc(10%);
            position: absolute;
            z-index: 3;

        }
        p:last-child {
            top: calc(40%);
            left: calc(10%);
            position: absolute;
            z-index: 3;
        }
   }
`;