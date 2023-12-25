import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid #ddd;
  display: flex;
  /* flex-direction: ${({ vertical }) => (vertical=="true" ? 'column' : 'row')}; */
  padding: 10px;
  margin: 10px;
  align-items: center;
  width:100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px; 
`;

export const InfoContainer = styled.div`
  border-right: ${({ border }) => (border=="true" ? '1px solid #ddd' : 'none')};
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  padding-right: 20px;
  width: 50%;
  overflow:hidden;
  flex-wrap:nowrap;
`;

// export const ButtonContainer = styled.div`
// display:flex;
// align-self: end;
// `;
