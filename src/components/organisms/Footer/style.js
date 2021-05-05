import styled from "styled-components";

export const Container = styled.footer`
    background-color: ${props => props.theme.colors.black};
    padding: 25px 16px 0 16px;
    display: grid;
    margin: auto;
    max-width: 1200px;
    align-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    .localization {

    }
    .logos {
        img {
            cursor: pointer;
        }
        display: flex;
        justify-content: center;
        
    }
    .buttons {
        button:first-child {
            margin-bottom: 20px;
        }
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media(max-width: 800px) {
        gap: 10px 0px;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 0.5fr;
    }
`;

export const BackgroundColor = styled.div`
    background-color: ${props => props.theme.colors.black};
`;