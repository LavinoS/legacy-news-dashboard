export default (restClient) => ({
  register: async (payload) => {
    return restClient.post('/users/register', { payload: payload });
  },

  login: async (payload) => {
    return restClient.post('/users/login', payload);
  },
});
