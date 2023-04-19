export default (restClient) => ({
  receive: async () => {
    return restClient.get('/articles/receiveArticles');
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
});
