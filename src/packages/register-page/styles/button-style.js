const buttonStyle = {
  ALL_DEVICES: {
    margin: '0 0 12px',
    color: '#FFF',
    backgroundImage: 'linear-gradient(195deg, #EC407A 0%, #D81B60 100%)',
    borderRadius: '8px',
    border: 0,
    boxShadow:
      '0 3px 3px 0 rgb(233 30 99 / 15%), 0 3px 1px -2px rgb(233 30 99 / 20%), 0 1px 5px 0 rgb(233 30 99 / 15%)',
    transition: 'all 0.15s ease-in',
    padding: '10px 24px',
    '&:hover': {
      backgroundColor: '#e91e63',
      boxShadow:
        '0 14px 26px -12px rgb(233 30 99 / 40%), 0 4px 23px 0 rgb(233 30 99 / 15%), 0 8px 10px -5px rgb(233 30 99 / 20%)',
    },
    fontWeight: '700',
    lineHeight: '1.7',
    verticalAlign: 'middle',
    fontSize: '16px',
    letterSpacing: '0.8px',
  },
};

export default buttonStyle;
