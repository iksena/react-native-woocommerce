import axios, { AxiosResponse } from 'axios';
import OAuth from 'oauth-1.0a';
import CryptoJS from 'crypto-js';

import config from '../Config';

const wcBaseUrl = config.WC_BASE_URL;
const wcApiUrl = config.WC_API_URL;

const _getOAuth = (): OAuth => new OAuth({
  consumer: {
    key: config.WC_CONSUMER_KEY,
    secret: config.WC_CONSUMER_SECRET
  },
  signature_method: 'HMAC-SHA1',
  hash_function: (baseString: string, key: string) =>
    CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(baseString, key))
});

const get = async (path: string): Promise<AxiosResponse> => {
  const request = {
    url: `${wcBaseUrl}${wcApiUrl}${path}`,
    method: 'GET'
  };
  const oauth = _getOAuth().authorize(request);

  return axios.get(request.url, { params: oauth });
};

const post = async (path: string, body: object): Promise<AxiosResponse> => {
  const request = {
    url: `${wcBaseUrl}${wcApiUrl}${path}`,
    method: 'POST'
  };
  const oauth = _getOAuth().authorize(request);

  return axios.post(request.url, body, { params: oauth });
};


export default {
  get,
  post
};
