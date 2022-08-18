import { AxiosError } from 'axios';
import axiosInstance from '.';
import { DEFAULT_FAILURE_HTTP_RESPONSE, DEFAULT_SUCCESS_HTTP_RESPONSE } from './constants';
import { HTTP_RESPONSE } from './types';

export interface GetArgs {
  endpointPattern: string;
  params?: any;
  queryParams?: any;
}

export const get = async ({
  endpointPattern = '',
  params = null,
  queryParams = null
}: GetArgs): Promise<HTTP_RESPONSE<any>> => {
  try {
    const endpoint = params?.id ? endpointPattern.replace('%id', params.id) : endpointPattern;
    const response = await axiosInstance.get(endpoint, {
      params: queryParams
    });

    return { ...DEFAULT_SUCCESS_HTTP_RESPONSE, data: response.data.data };
  } catch (error) {
    return error instanceof AxiosError
      ? {
          ...DEFAULT_FAILURE_HTTP_RESPONSE,
          code: error.response?.status || 500,
          message: error.response?.statusText
        }
      : { ...DEFAULT_FAILURE_HTTP_RESPONSE };
  }
};
