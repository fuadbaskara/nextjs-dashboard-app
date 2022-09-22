import { AxiosError, AxiosResponse } from 'axios';
import { toCamelCase } from '../utils/string';

export const responseInterceptor = (response: AxiosResponse) => ({
  ...response,
  ...(response.data && { data: toCamelCase(response.data) }),
});

export const errorInterceptor = (err: AxiosError): Promise<never> => {
  const { response } = err;
  if (response) {
    // handle interceptor here
  } else {
    throw new Error('Something wrong happened');
  }
  return Promise.reject(err);
};
