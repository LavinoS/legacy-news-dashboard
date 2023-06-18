export default (restClient) => ({
  receive: async () => {
    return restClient.get('/statistics');
  },
});
