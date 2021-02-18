import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 20vh;

  @media (max-width: 1023px) {
    display: grid;
    justify-items: center;    
    margin-top: 6vh;
  }
  
  @media (max-width: 767px) {
    display: grid;
    justify-items: center;    
    margin-top: 6vh;
  }
`;

export const AddOrder = styled.div`
  width: 1165px;
  height: 256px;
  box-shadow: 2px 2px 10px #00000029;
  border-radius: 4px;
  opacity: 1;
  padding: 24px 32px 32px 21px;

  @media (max-width: 1023px) {
    width: 90%;
    height: auto;
    text-align: center;
  }

  @media (max-width: 767px) {
    width: 70%;
    height: auto;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 24px;
  color: #0C5990;
  margin: 0;
`;

export const Subtitle = styled.p`
  font-weight: normal;
  font-size: 16px;
  color: #C1C1C1;
  margin-top: 5px;
  
`;

// Input properties
export const InputContainer = styled.div`
  display: flex;

  @media (max-width: 1023px) {
    display: flex;
    justify-items: center;
    align-items: center;
  }
  
  @media (max-width: 767px) {
    display: grid;
    justify-items: center;
    align-items: center;
  }
`;

// input 1
export const InputContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 25px 25px 0;
  position: relative;


  @media (max-width: 1023px){
    align-self: center;
    justify-self: center;
    display: grid;
    padding: 25px;
    margin: 10px 0;
  }
  
  @media (max-width: 767px){
    align-self: center;
    justify-self: center;
    display: grid;
    padding: 25px;
    margin: 10px 0;
  }
  
`;

export const Label1 = styled.label`
  color: #B5B5B5;
  font-weight: normal;
  opacity: 0.75;
  order: 1;
  outline: 0;
  padding-left: 2px;
  pointer-events: none;
  text-shadow: none;
  text-transform: capitalize;
  transform-origin: left top;
  transform: scale(1) translate3d(0, 22px, 0);
  transition: 200ms ease all;

  &.active {
    transform: translateY(1px);
  }
`;

export const Input1 = styled.input`
  border-radius: 0;
  display: flex;
  font-size: 100%;
  line-height: 25px;
  text-shadow: none;

  border: 0;
  border-bottom: 1px solid rgba(12, 89, 144, 1);
  color: #838383;
  flex: 1 1 auto;
  order: 2;
  width: 464px;

  &:focus {
    outline: 0;
  }
  @media (max-width: 1023px) {
    width: 100%;
  }
  
  @media (max-width: 767px) {
    width: 100%;
  }

`;

//input 2
export const InputContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  position: relative;

  @media (max-width: 1023px){
    align-self: center;
    justify-self: center;
    display: grid;
    padding: 25px;
    margin: 10px 0;
  }
  
  @media (max-width: 767px){
    align-self: center;
    justify-self: center;
    display: grid;
    padding: 25px;
    margin: 10px 0;
  }
`;

export const Label2 = styled.label`
  color: #B5B5B5;
  font-weight: normal;
  opacity: 0.75;
  order: 1;
  outline: 0;
  padding-left: 2px;
  pointer-events: none;
  text-shadow: none;
  text-transform: capitalize;
  transform-origin: left top;
  transform: scale(1) translate3d(0, 22px, 0);
  transition: 200ms ease all;

  &.active {
    transform: translateY(1px);
  }
`;

export const Input2 = styled.input`
  border-radius: 0;
  display: flex;
  font-size: 100%;
  line-height: 25px;
  text-shadow: none;

  border: 0;
  border-bottom: 1px solid rgba(12, 89, 144, 1);
  color: #838383;
  flex: 1 1 auto;
  order: 2;
  width: 184px;

  &:focus {
    outline: 0;
  }

  @media (max-width: 1023px) {
    width: 100%;
  }
  
  @media (max-width: 767px) {
    width: 100%;
  }

`;

export const ButtonContainer = styled.div`
  margin: 35px 0;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1023px) {
    display: flex;
    justify-content: center;
    margin: 0;
  }
  
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    margin: 0;
  }
`;

