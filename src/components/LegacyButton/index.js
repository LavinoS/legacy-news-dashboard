import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  height: fit-content;
  padding: 15px 20px;
  margin: 0;
  background: #000;
  color: #fff;
`;

export default ({
  className,
  style,
  onClick,
  children,
  ariaLabel,
  ...otherProps
}) => {
  //FIXME: After creation of paragraph component, add it as children of button
  return (
    <StyledButton
      className={className}
      style={style}
      onClick={onClick}
      aria-label={ariaLabel}
      {...otherProps}
    >
      {children}
    </StyledButton>
  );
};
