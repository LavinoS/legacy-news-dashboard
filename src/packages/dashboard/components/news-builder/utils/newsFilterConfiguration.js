import inputTypes from '../../../../../types/inputTypes';

export default [
  {
    id: 'search',
    type: inputTypes.SEARCH,
    placeholder: 'Type here...',
    fieldContainerStyleProps: {
      ALL_DEVICES: {
        gridArea: '1 / 1 / 2 / 6',
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
    id: 'author',
    type: inputTypes.SELECT,
    placeholder: 'Author',
    fieldContainerStyleProps: {
      ALL_DEVICES: {
        gridArea: '1 / 6 / 2 / 8',
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
        '&:after': {
          border: 'solid #EC407A',
          borderWidth: '0 3px 3px 0',
        },
      },
    },
    optionStyleProps: {
      ALL_DEVICES: {
        textTransform: 'capitalize',
        '&:hover': {
          backgroundImage: 'linear-gradient(195deg,#EC407A 0%,#D81B60 100%)',
          color: '#FFF',
          borderRadius: 8,
        },
      },
    },
  },
  {
    id: 'type',
    type: inputTypes.SELECT,
    placeholder: 'Type',
    fieldContainerStyleProps: {
      ALL_DEVICES: {
        gridArea: '1 / 8 / 2 / 10',
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
        '&:after': {
          border: 'solid #EC407A',
          borderWidth: '0 3px 3px 0',
        },
      },
    },
    optionStyleProps: {
      ALL_DEVICES: {
        textTransform: 'capitalize',
        '&:hover': {
          backgroundImage: 'linear-gradient(195deg,#EC407A 0%,#D81B60 100%)',
          color: '#FFF',
          borderRadius: 8,
        },
      },
    },
  },
  {
    id: 'status',
    type: inputTypes.SELECT,
    placeholder: 'Status',
    fieldContainerStyleProps: {
      ALL_DEVICES: {
        gridArea: '1 / 10 / 2 / 12',
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
        '&:after': {
          border: 'solid #EC407A',
          borderWidth: '0 3px 3px 0',
        },
      },
    },
    optionStyleProps: {
      ALL_DEVICES: {
        textTransform: 'capitalize',
        '&:hover': {
          backgroundImage: 'linear-gradient(195deg,#EC407A 0%,#D81B60 100%)',
          color: '#FFF',
          borderRadius: 8,
        },
      },
    },
  },
  {
    id: 'limit',
    type: inputTypes.SELECT,
    fieldContainerStyleProps: {
      ALL_DEVICES: {
        gridArea: '1 / 12 / 2 / 13',
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
        '&:after': {
          border: 'solid #EC407A',
          borderWidth: '0 3px 3px 0',
        },
      },
    },
    optionStyleProps: {
      ALL_DEVICES: {
        textTransform: 'capitalize',
        '&:hover': {
          backgroundImage: 'linear-gradient(195deg,#EC407A 0%,#D81B60 100%)',
          color: '#FFF',
          borderRadius: 8,
        },
      },
    },
    placeholder: '5',
    options: [
      { label: '5', value: '5' },
      { label: '10', value: '10' },
      { label: '15', value: '15' },
    ],
  },
];
