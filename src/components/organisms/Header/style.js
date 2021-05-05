import styled from "styled-components";

export const Container = styled.header`
    background-color: ${props => props.theme.colors.white};
    display: grid;
    padding: 16px 0 23px 23px;
    margin: auto;
    max-width: 1200px;
    align-items: center;
    align-items: center;
    grid-template-columns: 2fr 4fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
        "logo search account shop";

    .expandable-icon {
        display: none;
        @media(max-width: 800px) {
            display: unset;
        }
        grid-area: expandable;
    }

    .my-account {
        padding-left: 44px;
        grid-area: account;
        @media(max-width: 800px) {
            display: none;
        }
    }

    .logo-icon {
        display: flex;
        img {
            width: 170px;
            heigth: 41px;
        }
        @media(max-width: 800px) {
            justify-content: center;
        }
        grid-area: logo;
        align-self: center;
    }

    .shop {
        display: flex;
        @media(max-width: 800px) {
            padding-right: 20px;
            justify-content: flex-end;
        }
        padding-left: 20px;
        grid-area: shop;
    }

    .search {
        grid-area: search;
    }

    @media(max-width: 800px) {
        padding: 20px;
        gap: 10px 0px;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: auto auto;
        grid-template-areas:
        "expandable logo shop"
        "search search search";
    }
`;