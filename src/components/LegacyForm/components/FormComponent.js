import React, { forwardRef } from 'react';
import styled from 'styled-components';
import inputTypes from '../../../types/inputTypes';
import CustomSelect from '../../ui/CustomSelect';
import ImageUploader from '../../ui/ImageUploader';

const StyledInput = styled.input`
  width: 100%;
  ${(props) => props.theme.toRawCss(props.styleProps)}
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  ${(props) => props.theme.toRawCss(props.styleProps)}
`;

export default forwardRef((props, ref) => {
  const {
    type,
    id,
    mandatory,
    placeholder,
    fieldStyleProps,
    accept,
    onChange,
    options,
    onClick,
    hidden,
  } = props;

  switch (type) {
    case inputTypes.SELECT:
      return (
        <CustomSelect
          onClick={onClick}
          selectStyleProps={fieldStyleProps}
          optionsConfig={options}
          placeholder={placeholder}
        />
      );

    case inputTypes.FILE:
      return (
        <ImageUploader hidden={hidden} onChange={(value) => onChange(value)} />
      );

    case inputTypes.TEXT_AREA:
      return (
        <StyledTextArea
          id={id}
          ref={ref}
          required={mandatory}
          placeholder={placeholder}
          styleProps={fieldStyleProps}
          onChange={(e) => onChange(e.target.value)}
        />
      );

    default:
      return (
        <StyledInput
          id={id}
          ref={ref}
          type={type}
          required={mandatory}
          placeholder={placeholder}
          styleProps={fieldStyleProps}
          autoComplete={id}
          accept={accept}
          onChange={(e) => onChange(e.target.value)}
        />
      );
  }
});
