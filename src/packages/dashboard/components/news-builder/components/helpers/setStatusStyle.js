export default (status) => ({
  ALL_DEVICES: {
    backgroundImage:
      status === 'published'
        ? 'linear-gradient(195deg, #66BB6A 0%, #43A047 100%)'
        : 'linear-gradient(195deg, #747b8a 0%, #495361 100%)',
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
});
