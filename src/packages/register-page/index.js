import React from 'react';
import {
  DarkOverlay,
  LegacyButton,
  LegacyDiv,
  LegacyForm,
  LegacyHeading,
  LegacyLink,
  LegacyParagraph,
} from '../../components';
import {
  BUTTON_CONTAINER_STYLE,
  BUTTON_STYLE,
  DEFAULT_MAIN_CONTAINER_STYLE,
  FORM_CONTAINER_STYLE,
  FORM_STYLE_PROPS,
  HEADING_CONTAINER_STYLE,
  PARAGRAPH_STYLE,
} from './styles';
import { registerFormBackground } from './assets';
import { registerFormConfiguration } from './utils';
import { headingVariants } from '../../types/headingVariants';

const RegisterPage = (props) => {
  return (
    <LegacyDiv styleProps={DEFAULT_MAIN_CONTAINER_STYLE}>
      <DarkOverlay />
      <img
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          right: 0,
        }}
        alt="rocks"
        src={registerFormBackground.path}
      />
      <LegacyDiv styleProps={FORM_CONTAINER_STYLE}>
        <LegacyDiv styleProps={HEADING_CONTAINER_STYLE}>
          <LegacyHeading
            variant={headingVariants.H1}
            text="Registration Form"
            styleProps={{
              ALL_DEVICES: {
                fontSize: '24px',
                fontWeight: '700',
                lineHeight: '1.375',
                color: '#FFF',
                letterSpacing: '0.8px',
              },
            }}
          />
        </LegacyDiv>
        <LegacyForm
          styleProps={FORM_STYLE_PROPS}
          formConfiguration={registerFormConfiguration}
        />
        <LegacyDiv styleProps={BUTTON_CONTAINER_STYLE}>
          <LegacyButton styleProps={BUTTON_STYLE} text="REGISTER" />
          <LegacyParagraph
            styleProps={PARAGRAPH_STYLE}
            text="Already have an account? "
          >
            <LegacyLink
              text="Sign in"
              styleProps={{
                ALL_DEVICES: {
                  color: '#e91e63',
                  fontWeight: '600',
                },
              }}
              redirectPath="/login"
            />
          </LegacyParagraph>
        </LegacyDiv>
      </LegacyDiv>
    </LegacyDiv>
  );
};

export default RegisterPage;
