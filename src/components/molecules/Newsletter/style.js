import styled from "styled-components";

export const Background = styled.div`
    background-color: ${props => props.theme.colors.lightGrey};
`;
export const Container = styled.div`
 padding: 24px 17px 0 17px;
 max-width: 1200px;
 margin: auto;
 @media(min-width: 800px) {
    padding-bottom: 20px;
}
 font-family: 'Lato';
    background-color: ${props => props.theme.colors.lightGrey};
    font-size: 22px;
    font-weight: 700;
    .ant-form-item {
        input {
            border-radius: 5px;
        }
        width: 280px;
        margin: auto;
        padding-top: 22px;
        justify-content: center;
        @media(min-width: 800px) {
            width: 330px;
            padding: 0;
            display: flex;
            justify-content: center;
        }
    }
    .button {
        display: flex;
        justify-content: center;
        padding-top: 10px;
        padding-bottom: 20px;
        @media(min-width: 800px) {
            padding: 0;
            display: flex;
            align-items: center;
        }
        button {
            background: black;
            width: 280px;
            border-radius: 5px;
        }
    }

    form {
        @media(min-width: 800px) {
            padding-top: 20px;
            display: flex;
            justify-content: center;
        }
        
    }
`;