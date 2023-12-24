import Image from "next/image";
import styled from "styled-components";

const AvatarContainer = styled.div`
  width: ${({ size }) => size || "50px"};
  height: ${({ size }) => size || "50px"};
  border-radius: 50%;
  overflow: hidden;
`;

const Avatar = ({ src, alt, size }) => {
  return (
    <AvatarContainer size={size}>
      <Image src={src} alt={alt} width={50} height={50} layout="responsive" />
    </AvatarContainer>
  );
};

export default Avatar;
