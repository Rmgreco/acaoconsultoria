import Image from "next/image";
import { AvatarContainer } from "./AvatarStyles";


const Avatar = ({ src, alt, size }) => {
  return (
    <AvatarContainer size={size}>
      <Image src={src} alt={alt} width={100} height={100}  />
    </AvatarContainer>
  );
};

export default Avatar;
