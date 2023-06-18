import inputTypes from '../../../../../../types/inputTypes';

export default [
  {
    id: 'title',
    type: inputTypes.TEXT,
    placeholder: 'Enter title name',
    label: 'Article Title',
    mandatory: true,
    fieldContainerStyleProps: {
      ALL_DEVICES: {
        margin: '16px 0',
        gridRowStart: '1',
        gridColumnStart: '1',
        gridRowEnd: '2',
        gridColumnEnd: '2',
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
    id: 'summary',
    type: inputTypes.TEXT_AREA,
    placeholder: 'Your summary',
    label: 'Summary',
    mandatory: false,
    fieldContainerStyleProps: {
      ALL_DEVICES: {
        margin: '16px 0',
        gridRowStart: '2',
        gridColumnStart: '1',
        gridRowEnd: '4',
        gridColumnEnd: '2',
      },
    },
    labelStyleProps: {},
    fieldStyleProps: {
      ALL_DEVICES: {
        appearance: 'none',
        resize: 'none',
        border: '1px solid #d2d6da',
        borderRadius: '6px',
        padding: '10px 12px',
        color: '#7b809a',
        height: '130px',
        '&:focus-visible': {
          outline: 'solid #42424a',
        },
        '&::placeholder': {
          color: '#7b809a',
          fontSize: '14px',
          verticalAlign: 'text-top',
        },
      },
    },
  },
  {
    id: 'slug',
    type: inputTypes.TEXT,
    placeholder: 'Enter slug',
    label: 'Slug',
    mandatory: true,
    fieldContainerStyleProps: {
      ALL_DEVICES: {
        margin: '16px 0',
        gridRowStart: '4',
        gridColumnStart: '1',
        gridRowEnd: '5',
        gridColumnEnd: '2',
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
    id: 'author',
    type: inputTypes.TEXT,
    placeholder: 'Edit author name',
    label: 'Author name',
    mandatory: true,
    fieldContainerStyleProps: {
      ALL_DEVICES: {
        margin: '16px 0',
        gridRowStart: '5',
        gridColumnStart: '1',
        gridRowEnd: '6',
        gridColumnEnd: '2',
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
    id: 'featuredImage',
    type: inputTypes.FILE,
    placeholder: '',
    accept: 'image/*',
    label: 'Featured Image',
    mandatory: true,
    hidden: true,
    fieldContainerStyleProps: {
      ALL_DEVICES: {
        margin: '16px 0',
        gridRowStart: '1',
        gridColumnStart: '2',
        gridRowEnd: '5',
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
    id: 'alt',
    type: inputTypes.TEXT,
    placeholder: 'Enter image alt text',
    label: 'Image Alt Text',
    mandatory: true,
    fieldContainerStyleProps: {
      ALL_DEVICES: {
        margin: '16px 0',
        gridRowStart: '5',
        gridColumnStart: '2',
        gridRowEnd: '6',
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
    id: 'category',
    type: inputTypes.SELECT,
    placeholder: 'Select category',
    label: 'Category',
    mandatory: true,
    options: [
      { label: 'Sport', value: 'sport' },
      { label: 'Politics', value: 'politics' },
      { label: 'Social', value: 'social' },
      { label: 'External', value: 'external' },
      { label: 'Economics', value: 'economics' },
    ],
    fieldContainerStyleProps: {
      ALL_DEVICES: {
        margin: '16px 0',
        gridRowStart: '6',
        gridColumnStart: '1',
        gridRowEnd: '7',
        gridColumnEnd: '2',
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
