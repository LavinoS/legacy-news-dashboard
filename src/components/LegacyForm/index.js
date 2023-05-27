import React, { Fragment, useRef, useState } from 'react';
import styled from 'styled-components';

import { LegacyButton, LegacyDiv } from '../index';
import { isEmpty } from 'lodash';
import { FIELD_CONTAINER_STYLE } from './styles';
import mergeStyles from '../../helpers/mergeStyles';
import validateFields from '../../helpers/validateFields';
import { BUTTON_STYLE } from '../../packages/register-page/styles';
import FormComponent from './components/FormComponent';

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
  buttonText,
  formType,
  submitButtonStyle = {},
  receivedForm,
  injectedComponent,
  buttonContainerStyleProps = {},
  ...otherProps
}) => {
  const [formInformation, setFormInformation] = useState(
    formConfiguration.reduce((previousValue, currentValue) => {
      return {
        ...previousValue,
        [currentValue.id]: receivedForm ? receivedForm[currentValue.id] : '',
        ...(receivedForm?.id && { id: receivedForm.id }),
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

  const inputRef = useRef([]);

  const handleChangeValue = (currentField, currentValue) => {
    setFormInformation((oldInformation) => ({
      ...oldInformation,
      [currentField]: currentValue,
    }));

    setErrors((oldErrors) => {
      return {
        ...oldErrors,
        [currentField]: {
          errors: validateFields(currentField, currentValue, formType),
        },
      };
    });
  };

  const handleSubmit = () => {
    Object.entries(formInformation).forEach(([fieldName, value]) => {
      const checkingErrors = Object.values(errors).every(
        (error) => !error.errors,
      );

      if (!value) {
        return setErrors((oldErrors) => {
          return {
            ...oldErrors,
            [fieldName]: {
              errors: 'This field cannot be empty',
            },
          };
        });
      }

      if (checkingErrors) {
        return (
          sendFormData({
            payload: { ...formInformation },
          }),
          setFormInformation((oldValues) => ({
            ...oldValues,
            [fieldName]: '',
          })),
          inputRef.current.map((element) => (element.value = ''))
        );
      }
    });
  };

  const mergedSubmitButtonStyle = mergeStyles(BUTTON_STYLE, submitButtonStyle);

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
            accept,
            options = [],
            hidden = false,
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
              <FormComponent
                id={id}
                hidden={hidden}
                ref={(element) => (inputRef.current[index] = element)}
                options={options}
                type={type}
                required={mandatory}
                placeholder={placeholder}
                fieldStyleProps={fieldStyleProps}
                autoComplete={id}
                accept={accept}
                value={formInformation[id]}
                onChange={(value) => handleChangeValue(id, value)}
                onClick={(value) => handleChangeValue(id, value)}
              />
              {[errors].map((error, index) => (
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
      <LegacyDiv styleProps={buttonContainerStyleProps}>
        {injectedComponent && injectedComponent}
        <LegacyButton
          styleProps={mergedSubmitButtonStyle}
          text={buttonText}
          onClick={handleSubmit}
        />
      </LegacyDiv>
    </>
  );
};
