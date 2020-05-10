import axios from 'axios';
import Oauth from "oauth-1.0a";
import CryptoJS from "crypto-js";

import config from '../Config';

const wcBaseURL = config.WC_BASE_URL;

// @ts-ignore
const getOauth = () => Oauth({
    consumer: {
        key: config.WC_CONSUMER_KEY,
        secret: config.WC_CONSUMER_SECRET
    },
    signature_method: "HMAC-SHA1",
    hash_function: (baseString: string, key: string) => {
        return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(baseString, key));
    }
});

const get = async (path: string): Promise<object> => {
    const request = {
        url: `${wcBaseURL}${path}`,
        method: 'GET'
    }
    const oauth = getOauth().authorize(request);

    return axios.get(request.url, {params: oauth});
};

const post = async (path: string, body: object): Promise<object> =>
    axios.post(`${wcBaseURL}${path}`, body);

const put = async (path: string, requestBody: object): Promise<object> =>
    axios.put(`${wcBaseURL}${path}`, requestBody);

const remove = async (path: string, requestBody: object): Promise<object> =>
    axios.delete(`${wcBaseURL}${path}`, {data: requestBody});


export default {
    get,
    put,
    remove,
    post
};
