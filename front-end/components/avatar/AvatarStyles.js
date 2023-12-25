import styled from "styled-components";

export const AvatarContainer = styled.div`
  width: ${({ size }) => size || "150px"};
  height: ${({ size }) => size || "150px"};
  border-radius: 50%;
  overflow: hidden;
`;