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
  ${(props) => props.theme.toRawCss(props.styleProps || {})};
`;

export default ({ className, styleProps, style, children, ...otherProps }) => {
  return (
    <StyledDiv
      styleProps={styleProps}
      className={className}
      style={style}
      {...otherProps}
    >
      {children}
    </StyledDiv>
  );
};
