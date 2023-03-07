import React from 'react';
import styled from 'styled-components';
import { headingVariants } from '../../types/headingVariants';

const HeadingBase = ({ variant, as: Component = variant, ...props }) => (
  <Component {...props} />
);

const StyledHeading = styled(HeadingBase)`
  margin: 0;
`;

export default ({
  className,
  variant = headingVariants.H1,
  style,
  text,
  ...otherProps
}) => {
  return (
    <StyledHeading
      variant={variant}
      className={className}
      style={style}
      {...otherProps}
    >
      {text}
    </StyledHeading>
  );
};
