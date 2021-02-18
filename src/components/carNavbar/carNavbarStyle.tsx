
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5vh;
  padding: 24px 0 0 0;
  width: 1165px;
  min-width: 93%;

  @media (max-width: 1023px){
    width: 50%;
  }
  
  @media (max-width: 767px){
   width: 50%;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1em;
`;

export const Tr = styled.tr`
  background: #FFFFFF 0 0 no-repeat padding-box;
  box-shadow: 2px 2px 10px #00000029;
  border-radius: 4px;
  opacity: 1;
  width: 1165px;
  margin: 20px 0 !important;
`;

export const Theader = styled.thead`
  background-color: #0C5990;
  color: #fff;
  width: 100%;
  border-radius: 4px 4px 0 0;  
`;
export const Th = styled.th`
  text-align: left;
  padding: 10px 10px;
`;

export const Td = styled.td`
  text-align: left;
  /*padding-left: 10px;*/
  padding: 27px 0 27px 10px;
`;

export const TextService = styled.text`
  color: #0C5990;
  font-size: 16px;
  font-weight: normal;
`;

export const TextDates = styled.text`
  color: #707070;
  font-size: 16px;
  font-weight: normal;
`;


export const TextCarPlate = styled.text`
  color: #0C5990;
  font-size: 16px;
  font-weight: bold;
`;

