export default (
  color = 'linear-gradient(195deg, #EC407A 0%, #D81B60 100%)',
  shadow = '0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)',
) => {
  return {
    ALL_DEVICES: {
      backgroundImage: color,
      boxShadow: shadow,
      padding: '28px 16px',
      width: '100%',
      borderRadius: '8px',
      justifyContent: 'start',
      margin: '-48px 0 32px',
      color: '#FFF',
      fontSize: '16px',
      fontWeight: '600',
      lineHeight: '26px',
    },
  };
};
