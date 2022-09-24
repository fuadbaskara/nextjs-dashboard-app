import { AxiosError, AxiosResponse } from 'axios';

export const responseInterceptor = <T>(response: AxiosResponse<T>) => {
  return {
    ...response,
    ...(response.data && { data: response.data }),
  };
};

export const errorInterceptor = (err: AxiosError): Promise<never> => {
  const { response } = err;
  if (response) {
    // handle interceptor here
  } else {
    throw new Error('Something wrong happened');
  }
  return Promise.reject(err);
};
