import axios from 'axios';

export default ({ baseUrl, ...extraConfigs }) => {
  const client = axios.create({
    baseURL: baseUrl,
    ...extraConfigs,
  });

  const makeRequest = async ({
    url,
    method,
    payload = undefined,
    params = undefined,
    config = {},
  }) => {
    try {
      const { data, status } = await client.request({
        url,
        method,
        data: payload,
        params,
        ...config,
      });

      return { json: data, status };
    } catch (error) {
      return {
        json: error.response ? error.response.data : {},
        status: error.response ? error.response.status : 500,
      };
    }
  };

  return {
    baseUrl,
    get: async function (
      url,
      { params = {}, config = {}, cacheable = false } = {},
    ) {
      return makeRequest({
        url,
        method: 'get',
        params,
        config,
        cacheable,
      });
    },

    post: async function (
      url,
      { payload = {}, params = {}, config = {} } = {},
    ) {
      return makeRequest({
        url,
        method: 'post',
        payload,
        params,
        config,
      });
    },
  };
};
