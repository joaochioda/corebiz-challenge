import styled from "styled-components";

export const Container = styled.div`
    color: ${props => props.theme.colors.white};
    ul {
        list-style-type: none;
        padding 0;
    }
    .localization {
        position: relative;
        margin-bottom: 36px;
    }
    span:after {
        content: "";
        background: white;
        position: absolute;
        bottom: -16px;
        left: 0;
        height: 4px;
        width: 45px;
      }
`;