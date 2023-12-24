import styled from "styled-components";

export const AvatarContainer = styled.div`
  width: ${({ size }) => size || "100px"};
  height: ${({ size }) => size || "100px"};
  border-radius: 50%;
  overflow: hidden;
`;