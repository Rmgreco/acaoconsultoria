import { InfoLine } from "./InfoStyles";

const Info = ({ label, children }) => {
  return (
 <InfoLine>
    <strong>{label}:&nbsp;</strong>
    <div>{children}</div>
 </InfoLine>
  );
};

export default Info;
