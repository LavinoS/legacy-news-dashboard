export default (role) => {
  let color = 'linear-gradient(195deg, #747b8a 0%, #495361 100%)';

  switch (role) {
    case 'admin':
      color = 'linear-gradient(195deg, #EF5350 0%, #E53935 100%)';
      break;
    case 'editor':
      color = 'linear-gradient(195deg, #49a3f1 0%, #1A73E8 100%)';
      break;
    case 'publisher':
      color = 'linear-gradient(195deg, #FFA726 0%, #FB8C00 100%)';
      break;
  }

  return {
    ALL_DEVICES: {
      backgroundImage: color,
      textTransform: 'uppercase',
      fontWeight: '700',
      color: '#FFF',
      verticalAlign: 'baseline',
      borderRadius: '8px',
      lineHeight: '10px',
      fontSize: '12px',
      padding: 10,
      width: '100px',
    },
  };
};
