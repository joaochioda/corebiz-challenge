import styled from "styled-components";

export const Background = styled.div`
  background-color: ${(props) => props.theme.colors.lightGrey};
`;

export const SuccessContainer = styled.div`
  font-family: "Lato";
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 17px 20px 17px;
  max-width: 1200px;
  margin: auto;
  span:first-child {
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
  }
  span:last-child {
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
  }
  button {
    margin-top: 15px;
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.white};
    width: 328px;
    height: 48px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  padding: 24px 17px 20px 17px;
  max-width: 1200px;
  margin: auto;
  @media (min-width: 800px) {
    padding-bottom: 20px;
  }
  span {
    display: flex;
    justify-content: center;
  }
  font-family: "Lato";
  background-color: ${(props) => props.theme.colors.lightGrey};
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
    @media (min-width: 800px) {
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
    @media (min-width: 800px) {
      padding: 0;
      display: flex;
      align-items: center;
    }
    button {
      background: ${(props) => props.theme.colors.black};
      width: 280px;
      border-radius: 5px;
    }
  }

  form {
    @media (min-width: 800px) {
      padding-top: 20px;
      display: flex;
      justify-content: center;
    }
  }
`;
