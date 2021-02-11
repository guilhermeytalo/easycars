import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 20vh;
`;

export const Title = styled.h1`
  margin-top: 106px;
  margin-bottom: 0;
  font-size: 32px;
  color: ${props => props.theme.colors.primary};
`;

export const Subtitle = styled.p`
  font-size: 16px;
  text-align: center;
  margin-top: 26px;  
  padding: 0 230px;
  color: ${props => props.theme.colors.secondary};
`;

export const Button = styled.button`
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