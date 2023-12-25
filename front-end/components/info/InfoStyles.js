import styled from "styled-components";

export const InfoLine = styled.div`
display:flex;
padding: ${({ padding }) => padding || "0px"};
padding-top:5px;
align-items:center;
`;

export const StyledDot = styled.div`
  width: 15px;
  height: 15px;
  margin-left:5px;
  border-radius: 50%;
  background-color: ${({ color }) => color || 'transparent'};
`;