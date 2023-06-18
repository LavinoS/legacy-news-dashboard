export default (restClient) => ({
  register: async (payload) => {
    return restClient.post('/users/register', { payload: payload });
  },

  login: async (payload) => {
    return restClient.post('/users/login', payload);
  },

  receive: async (params) => {
    return restClient.get('/users', { params: params });
  },

  receiveUser: async (payload) => {
    return restClient.get('/users/receiveUser', { params: payload });
  },

  delete: async (payload) => {
    return restClient.delete('/users', { payload: payload });
  },

  edit: async (payload) => {
    return restClient.post('/users/edit', { payload: payload });
  },
});
