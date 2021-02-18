import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 20vh;
  
  @media(max-width: 767px) {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-family: ${props => props.theme.fonts};
  font-weight: lighter;  
  font-size: 32px;
  margin-top: 106px;
  margin-bottom: 0;
  color: ${props => props.theme.colors.primary};

  @media(max-width: 767px) {
    text-align: center;
    font-size: 22px;
  }
`;

export const Subtitle = styled.p`
  font-family: ${props => props.theme.fonts};
  font-weight: normal;
  font-size: 16px;
  text-align: center;
  margin-top: 26px;  
  padding: 0 230px;
  color: ${props => props.theme.colors.secondary};

  @media(max-width: 767px) {
    text-align: center;
    padding: 0;
    font-size: 14px;
  }
`;

export const Button = styled.button`
  font-family: ${props => props.theme.fonts};
  font-weight: normal;
  font-size: 16px;
  border-radius: 32px;
  padding: 0.5rem 0;
  margin-top: 54px;
  width: 120px;
  height: 48px;
  color: ${props => props.theme.colors.tertiary};
  background-color: ${props => props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.primary};
  cursor: pointer;
`;
