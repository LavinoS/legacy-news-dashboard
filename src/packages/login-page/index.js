import React, { useEffect, useState } from 'react';
import {
  DarkOverlay,
  LegacyDiv,
  LegacyForm,
  LegacyHeading,
  LegacyLink,
  LegacyParagraph,
} from '../../components';
import {
  BUTTON_CONTAINER_STYLE,
  DEFAULT_MAIN_CONTAINER_STYLE,
  FORM_CONTAINER_STYLE,
  HEADING_CONTAINER_STYLE,
  PARAGRAPH_STYLE,
} from '../register-page/styles';
import { registerFormBackground } from '../register-page/assets';
import { headingVariants } from '../../types/headingVariants';
import loginFormStyleProps from './styles/loginFormStyleProps';
import loginFormConfiguration from './utils/loginFormConfiguration';
import mergeStyles from '../../helpers/mergeStyles';
import { isEmpty } from 'lodash';
import { useNavigate } from 'react-router-dom';

const LoginPage = (props) => {
  const { injectedMethods: { loginMethod } = {} } = props;
  const redirect = useNavigate();

  const [loginData, setLoginData] = useState({});

  useEffect(() => {
    if (!isEmpty(loginData)) {
      loginMethod({
        payload: { ...loginData },
        callback: (result) => {
          sessionStorage.setItem('token', result.token);
          sessionStorage.setItem('role', result.role);
          redirect('/');
        },
      });
    }
  }, [loginData]);

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
      <LegacyDiv
        styleProps={mergeStyles(FORM_CONTAINER_STYLE, {
          ALL_DEVICES: { height: 'fit-content' },
        })}
      >
        <LegacyDiv styleProps={HEADING_CONTAINER_STYLE}>
          <LegacyHeading
            variant={headingVariants.H1}
            text="Login Form"
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
          styleProps={loginFormStyleProps}
          formConfiguration={loginFormConfiguration}
          sendFormData={setLoginData}
          buttonText="SIGN IN"
          formType="login"
        />
        <LegacyDiv styleProps={BUTTON_CONTAINER_STYLE}>
          <LegacyParagraph
            styleProps={PARAGRAPH_STYLE}
            text="Don't have an account? "
          >
            <LegacyLink
              text="Sign up"
              styleProps={{
                ALL_DEVICES: {
                  color: '#e91e63',
                  fontWeight: '600',
                },
              }}
              redirectPath="/register"
            />
          </LegacyParagraph>
        </LegacyDiv>
      </LegacyDiv>
    </LegacyDiv>
  );
};

export default LoginPage;
