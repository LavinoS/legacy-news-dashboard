import React, { Fragment, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { LegacyButton, LegacyDiv } from '../index';
import { debounce, isEmpty } from 'lodash';
import { FIELD_CONTAINER_STYLE } from './styles';
import mergeStyles from '../../helpers/mergeStyles';
import validateFields from '../../helpers/validateFields';
import { BUTTON_STYLE } from '../../packages/register-page/styles';

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

const ErrorField = styled.span`
  color: #e91e63;
  font-size: 12px;
  font-weight: 600;
  margin-top: 6px;
  text-align: start;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: -20px;
`;

export default ({
  formConfiguration,
  styleProps,
  sendFormData,
  ...otherProps
}) => {
  const [formInformation, setFormInformation] = useState(
    formConfiguration.reduce((previousValue, currentValue) => {
      return {
        ...previousValue,
        [currentValue.id]: '',
      };
    }, {}),
  );
  const [errors, setErrors] = useState(
    formConfiguration.reduce((prev, current) => {
      return {
        ...prev,
        [current.id]: {
          errors: '',
        },
      };
    }, {}),
  );

  const debounceCall = useCallback(
    debounce((field, value) => handleChangeValue(field, value), 500),
    [],
  );

  const handleChangeValue = (currentField, currentValue) => {
    setFormInformation((oldInformation) => ({
      ...oldInformation,
      [currentField]: currentValue,
    }));

    setErrors((oldErrors) => {
      return {
        ...oldErrors,
        [currentField]: {
          errors: validateFields(currentField, currentValue),
        },
      };
    });
  };

  const handleSubmit = () => {
    Object.entries(formInformation).forEach(([fieldName, value]) => {
      if (!isEmpty(value)) {
        Object.entries(errors).every(([_fieldName, errorMessage]) => {
          if (!isEmpty(errorMessage.errors)) {
            return null;
          }

          return sendFormData({ ...formInformation });
        });
      }

      if (isEmpty(value)) {
        setErrors((oldErrors) => {
          return {
            ...oldErrors,
            [fieldName]: {
              errors: 'This field cannot be empty',
            },
          };
        });
      }
    });
  };

  return (
    <>
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
                autoComplete={id}
                onChange={(e) => debounceCall(id, e.target.value)}
              />
              {[errors].flat().map((error, index) => (
                <Fragment key={index}>
                  {!isEmpty(error[id].errors) && (
                    <ErrorField key={index}>{error[id].errors}</ErrorField>
                  )}
                </Fragment>
              ))}
            </LegacyDiv>
          );
        })}
      </StyledForm>
      <LegacyButton
        styleProps={BUTTON_STYLE}
        text="REGISTER"
        onClick={handleSubmit}
      />
    </>
  );
};
