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
  text-align: center;

  ${(props) => props.theme.toRawCss(props.styleProps)}
`;

export default ({
  className,
  styleProps,
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
      styleProps={styleProps}
      onClick={onClick}
      aria-label={ariaLabel}
      {...otherProps}
    >
      <LegacyParagraph
        className={paragraphClass}
        styleProps={paragraphStyle}
        text={text}
      />
    </StyledButton>
  );
};
