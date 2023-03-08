import React from 'react';
import { LegacyDiv } from '../../components';

const DEFAULT_STYLING = {
  ALL_DEVICES: {
    margin: '200px',
    display: 'flex',
    justifyContent: 'center',
  },
  TABLET: {
    margin: '300px',
  },
  MOBILE: {
    margin: '400px',
  },
};

const RegisterPage = (props) => {
  return <LegacyDiv styleProps={DEFAULT_STYLING}></LegacyDiv>;
};

export default RegisterPage;
