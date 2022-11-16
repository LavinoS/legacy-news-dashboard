import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: fit-content;
  background: transparent;
`;

export default ({ className, style, children, ...otherProps }) => {
  return (
    <StyledDiv className={className} style={style} {...otherProps}>
      {children}
    </StyledDiv>
  );
};
