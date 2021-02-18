import styled from "styled-components";
import logo from '../../assets/easy-carros-logo.png';

export const Container = styled.div`
  width: 496px;
  height: 78px;
  border: none;
  @media(max-width: 800px) {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 70%;
    height: auto;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: auto;
/*
  @media(max-width: 800px) {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }*/
`;





