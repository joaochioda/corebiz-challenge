import styled from "styled-components";

export const Container = styled.button`
    cursor: pointer;
    background-color: ${props => props.theme.colors.white};
    img {
        margin-right: 15px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 12px;
    border-radius: 5px;
    padding-left: 20px;
    width: 195px;
    height: 38px;
    font-size: 12px;
    svg {
        fill: white;
    }
`;