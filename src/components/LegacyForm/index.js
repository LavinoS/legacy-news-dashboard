import React, { useState } from 'react';
import styled from 'styled-components';

import { LegacyDiv } from '../index';
import { isEmpty } from 'lodash';
import { FIELD_CONTAINER_STYLE } from './styles';
import mergeStyles from '../../helpers/mergeStyles';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  background: transparent;
  width: 100%;
  height: 100%;

  ${(props) => props.theme.toRawCss(props.styleProps)}
`;

const StyledLabel = styled.label`
  ${(props) =>
    props.mandatory &&
    `&:after {
    content: '*';
  }`}

  width:100%;
  color: #344767;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 6px;

  ${(props) => props.theme.toRawCss(props.styleProps)}
`;

const StyledInput = styled.input`
  width: 100%;
  ${(props) => props.theme.toRawCss(props.styleProps)}
`;

const ErrorField = styled.span``;

export default ({ formConfiguration, styleProps, ...otherProps }) => {
  const [errorText, setErrorText] = useState('');

  return (
    <StyledForm styleProps={styleProps} {...otherProps}>
      {formConfiguration.map((item, index) => {
        const {
          id,
          type,
          placeholder,
          fieldStyleProps,
          labelStyleProps,
          fieldContainerStyleProps,
          label,
          mandatory = false,
          ...otherFormProps
        } = item;

        const fieldContainerMergedStyle = mergeStyles(
          FIELD_CONTAINER_STYLE,
          fieldContainerStyleProps,
        );

        return (
          <LegacyDiv styleProps={fieldContainerMergedStyle} key={index}>
            <StyledLabel
              mandatory={mandatory}
              styleProps={labelStyleProps}
              htmlFor={id}
            >
              {label}
            </StyledLabel>
            <StyledInput
              id={id}
              type={type}
              required={mandatory}
              placeholder={placeholder}
              styleProps={fieldStyleProps}
            />
            {!isEmpty(errorText) && <ErrorField>{errorText}</ErrorField>}
          </LegacyDiv>
        );
      })}
    </StyledForm>
  );
};
