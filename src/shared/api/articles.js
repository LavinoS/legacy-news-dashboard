export default (restClient) => ({
  receive: async (params) => {
    return restClient.get('/articles/receiveArticles', { params: params });
  },

  delete: async (payload) => {
    return restClient.delete('/articles', { payload: payload });
  },

  changeStatus: async (payload) => {
    return restClient.put('/articles', { payload: payload });
  },

  receiveArticle: async (payload) => {
    return restClient.get('/articles', { params: payload });
  },

  createArticle: async (payload) => {
    return restClient.post('/articles/create', {
      payload: payload,
      config: {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    });
  },

  updateArticle: async (payload) => {
    return restClient.put('/articles/edit', {
      payload: payload,
      config: {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    });
  },
});
