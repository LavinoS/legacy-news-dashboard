import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  margin: 0;
`;

export default ({ className, style, text }) => {
  return (
    <StyledParagraph className={className} style={style}>
      {text}
    </StyledParagraph>
  );
};
