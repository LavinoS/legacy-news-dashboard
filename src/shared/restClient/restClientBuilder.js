import axios from 'axios';

/**
 *
 * @param baseUrl
 * @param extraConfigs
 * @return {{patch: (function({url: *, payload: *, config?: *}): Promise<{json: *, status: *}>), baseUrl: *, post: (function({url: *, payload: *, config?: *}): Promise<{json: *, status: *}>), get: (function({url: *, params?: *, config?: *, cacheable?: *}): Promise<{json: *, status: *}>), setDefaultHeaders(*=): void, delete: (function({url: *, config?: *}): Promise<{json: *, status: *}>), put: (function({url: *, payload: *, config?: *}): Promise<{json: *, status: *}>)}}
 */

export default ({ baseUrl, ...extraConfigs }) => {
  const client = axios.create({
    baseURL: baseUrl,
    ...extraConfigs,
  });

  /**
   *
   * @param url
   * @param method
   * @param payload
   * @param params
   * @param config
   * @param cacheable
   * @return {Promise<{json: *, status: *}>}
   */

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
    /**
     *
     * @param url
     * @param params
     * @param config
     * @param cacheable
     * @return {Promise<{json: *, status: *}>}
     */
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
  };
};
