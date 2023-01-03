export default (restClient) => ({
  retrieve: async () => {
    return restClient.get('/users');
  },
});
