import inputTypes from '../../../types/inputTypes';

export const registerFormConfiguration = [
  {
    id: 'name',
    type: inputTypes.TEXT,
    placeholder: 'Your first name',
    label: 'Name',
    mandatory: true,
    fieldContainerStyleProps: {
      ALL_DEVICES: {
        margin: '16px 0',
        paddingRight: '20px',
      },
      MOBILE: {
        padding: 0,
      },
    },
    labelStyleProps: {},
    fieldStyleProps: {
      ALL_DEVICES: {
        appearance: 'none',
        border: '1px solid #d2d6da',
        borderRadius: '6px',
        padding: '10px 12px',
        color: '#7b809a',
        '&:focus-visible': {
          outline: 'solid #e91e63',
        },
        '&::placeholder': {
          color: '#7b809a',
          fontSize: '14px',
        },
      },
    },
  },
  {
    id: 'surname',
    type: inputTypes.TEXT,
    placeholder: 'Your surname',
    label: 'Surname',
    mandatory: true,
    fieldContainerStyleProps: {
      ALL_DEVICES: {
        margin: '16px 0',
      },
    },
    labelStyleProps: {},
    fieldStyleProps: {
      ALL_DEVICES: {
        appearance: 'none',
        border: '1px solid #d2d6da',
        borderRadius: '6px',
        padding: '10px 12px',
        color: '#7b809a',
        '&:focus-visible': {
          outline: 'solid #e91e63',
        },
        '&::placeholder': {
          color: '#7b809a',
          fontSize: '14px',
        },
      },
    },
  },
  {
    id: 'email',
    type: inputTypes.TEXT,
    placeholder: 'Your email address',
    label: 'Email',
    mandatory: true,
    fieldContainerStyleProps: {
      ALL_DEVICES: {
        margin: '16px 0',
        gridRowStart: '2',
        gridColumnStart: '1',
        gridRowEnd: '3',
        gridColumnEnd: '3',
      },
    },
    labelStyleProps: {},
    fieldStyleProps: {
      ALL_DEVICES: {
        appearance: 'none',
        border: '1px solid #d2d6da',
        borderRadius: '6px',
        color: '#7b809a',
        padding: '10px 12px',
        '&:focus-visible': {
          outline: 'solid #e91e63',
        },
        '&::placeholder': {
          color: '#7b809a',
          fontSize: '14px',
        },
      },
    },
  },
  {
    id: 'password',
    type: inputTypes.PASSWORD,
    placeholder: 'Your password',
    label: 'Password',
    mandatory: true,
    fieldContainerStyleProps: {
      ALL_DEVICES: {
        margin: '16px 0',
        gridRowStart: '3',
        gridColumnStart: '1',
        gridRowEnd: '4',
        gridColumnEnd: '3',
      },
    },
    labelStyleProps: {},
    fieldStyleProps: {
      ALL_DEVICES: {
        appearance: 'none',
        border: '1px solid #d2d6da',
        borderRadius: '6px',
        padding: '10px 12px',
        color: '#7b809a',
        '&:focus-visible': {
          outline: 'solid #e91e63',
        },
        '&::placeholder': {
          color: '#7b809a',
          fontSize: '14px',
        },
      },
    },
  },
];
