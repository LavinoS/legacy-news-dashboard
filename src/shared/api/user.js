export default (restClient) => ({
  retrieve: async () => {
    return restClient.get('/users');
  },
  register: async (payload) => {
    return restClient.post('/users', { payload: payload });
  },
});
