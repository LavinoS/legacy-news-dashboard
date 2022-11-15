import React from 'react';
import styled from 'styled-components';
import { LegacyParagraph } from '../index';

const StyledButton = styled.button`
  width: 100%;
  height: fit-content;
  padding: 15px 20px;
  margin: 0;
  background: #000;
  color: #fff;
  cursor: pointer;
`;

export default ({
  className,
  style,
  onClick,
  ariaLabel,
  paragraphClass,
  text,
  paragraphStyle,
  ...otherProps
}) => {
  return (
    <StyledButton
      className={className}
      style={style}
      onClick={onClick}
      aria-label={ariaLabel}
      {...otherProps}
    >
      <LegacyParagraph
        className={paragraphClass}
        style={paragraphStyle}
        text={text}
      />
    </StyledButton>
  );
};
