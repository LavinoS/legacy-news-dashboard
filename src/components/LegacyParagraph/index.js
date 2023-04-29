import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  text-align: center;

  ${(props) => props.theme.toRawCss(props.styleProps)}
`;

export default ({ className, styleProps, text, children }) => {
  return (
    <StyledParagraph className={className} styleProps={styleProps}>
      {text}
      {children}
    </StyledParagraph>
  );
};
