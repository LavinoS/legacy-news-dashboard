import inputTypes from '../../../../../types/inputTypes';

export default [
  {
    id: 'firstName',
    type: inputTypes.TEXT,
    label: 'First name',
    mandatory: true,
    fieldContainerStyleProps: {
      ALL_DEVICES: {
        margin: '16px 0',
      },
    },
    fieldStyleProps: {
      ALL_DEVICES: {
        appearance: 'none',
        border: '1px solid #d2d6da',
        borderRadius: '6px',
        color: '#7b809a',
        padding: '10px 12px',
        '&:focus-visible': {
          outline: 'solid #42424a',
        },
        '&::placeholder': {
          color: '#7b809a',
          fontSize: '14px',
        },
      },
    },
  },
  {
    id: 'lastName',
    type: inputTypes.TEXT,
    label: 'Last Name',
    mandatory: true,
    fieldContainerStyleProps: {
      ALL_DEVICES: {
        margin: '16px 0',
      },
    },
    fieldStyleProps: {
      ALL_DEVICES: {
        appearance: 'none',
        border: '1px solid #d2d6da',
        borderRadius: '6px',
        color: '#7b809a',
        padding: '10px 12px',
        '&:focus-visible': {
          outline: 'solid #42424a',
        },
        '&::placeholder': {
          color: '#7b809a',
          fontSize: '14px',
        },
      },
    },
  },
  {
    id: 'userEmail',
    type: inputTypes.TEXT,
    placeholder: 'Enter slug',
    label: 'Email',
    mandatory: true,
    fieldContainerStyleProps: {
      ALL_DEVICES: {
        margin: '16px 0',
      },
    },
    fieldStyleProps: {
      ALL_DEVICES: {
        appearance: 'none',
        border: '1px solid #d2d6da',
        borderRadius: '6px',
        padding: '10px 12px',
        color: '#7b809a',
        '&:focus-visible': {
          outline: 'solid #42424a',
        },
        '&::placeholder': {
          color: '#7b809a',
          fontSize: '14px',
        },
      },
    },
  },
  {
    id: 'role',
    type: inputTypes.SELECT,
    placeholder: 'Select role',
    label: 'Role',
    mandatory: true,
    options: [
      { label: 'Admin', value: 'admin' },
      { label: 'Editor', value: 'editor' },
      { label: 'Publisher', value: 'publisher' },
    ],
    fieldContainerStyleProps: {
      ALL_DEVICES: {
        margin: '16px 0',
      },
    },
    fieldStyleProps: {
      ALL_DEVICES: {
        appearance: 'none',
        border: '1px solid #d2d6da',
        borderRadius: '6px',
        padding: '10px 12px',
        color: '#7b809a',
        fontSize: '14px',
        '&:focus-visible': {
          outline: 'solid #42424a',
        },
        '&::placeholder': {
          color: '#7b809a',
          fontSize: '14px',
        },
      },
    },
  },
];
