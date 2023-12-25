import { InfoLine, StyledDot } from "./InfoStyles";

const Info = ({ label, children, dot, color }) => {
  return (
    <InfoLine>
      <strong>{label}:&nbsp;</strong>
      <div>{children}</div>
      {dot && <StyledDot color ={color} />}
    </InfoLine>
  );
};

export default Info;
