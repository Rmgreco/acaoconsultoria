import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
color: blue;
  border: ${({ border }) => border || '1px solid #ddd'};
  transition: border 0.3s ease;

  &:hover {
    cursor: pointer;
  }
`;

const Button = ({ border, onClick, children }) => {
  return (
    <StyledButton border={border} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
