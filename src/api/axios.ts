import axios, { AxiosPromise, AxiosRequestConfig, Method } from 'axios';

import METHODS from './methods';
import { errorInterceptor, responseInterceptor } from './interceptors';
import { toSnakeCase } from '../utils/string';

const instance = axios.create();
instance.interceptors.response.use(responseInterceptor, errorInterceptor);

const apiCall = (
  method: Method,
  subUrl = '',
  data: Record<string, any> = {},
  options?: AxiosRequestConfig,
  overrideBaseUrl?: string,
): AxiosPromise => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const config: AxiosRequestConfig = {
    ...options,
    baseURL: overrideBaseUrl || API_URL,
    withCredentials: true,
    method,
    url: subUrl,
    headers: {
      ...(options && options.headers ? options.headers : {}),
      'Content-Type': 'application/json',
    },
  };
  const payload = { ...data };
  if (method === METHODS.GET) {
    Object.keys(payload).forEach((key) => {
      if (payload[key] === null || payload[key] === '') {
        delete payload[key];
      }
    });
    config.params = toSnakeCase(payload);
  } else {
    config.data = toSnakeCase(payload);
  }
  return instance.request(config);
};

export default apiCall;
