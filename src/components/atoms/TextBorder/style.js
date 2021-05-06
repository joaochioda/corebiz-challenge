import styled from "styled-components";

export const Container = styled.div`
    .localization {
        position: relative;
        margin-bottom: 36px;
    }
    span {
        size: ${props => props.size ? props.size : '20px'};
        font-weight: ${props => props.weight ? props.weight : '700'};
        color: ${props => props.color ? props.color : 'white'};
    }
    span:after {
        content: "";
        background: ${props => props.borderColor};
        position: absolute;
        bottom: -16px;
        left: 0;
        height: 4px;
        width: 45px;
    }
`;