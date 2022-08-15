import { HTTP_RESPONSE } from '../types';
import { City } from '../../../types';
import axiosInstance from '..';
import { DEFAULT_FAILURE_HTTP_RESPONSE, DEFAULT_SUCCESS_HTTP_RESPONSE } from '../constants';
import { AxiosError } from 'axios';
import { CITY_ENDPOINTS } from './endpoints';

interface GetArgs {
  endpointPattern: string;
  params?: any;
}

const get = async ({
  endpointPattern = '',
  params = null
}: GetArgs): Promise<HTTP_RESPONSE<any>> => {
  try {
    const endpoint = params?.id ? endpointPattern.replace('%id', params.id) : endpointPattern;
    const response = await axiosInstance.get(endpoint);

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

export const getCity = (id: number): Promise<HTTP_RESPONSE<City>> =>
  get({
    endpointPattern: CITY_ENDPOINTS.city,
    params: {
      id
    }
  });

export const getCities = (): Promise<HTTP_RESPONSE<City[]>> =>
  get({
    endpointPattern: CITY_ENDPOINTS.cities
  });

export const getCityForecasts = (id: number): Promise<HTTP_RESPONSE<City>> => {
  console.log(id);
  return get({
    endpointPattern: CITY_ENDPOINTS.cityForecasts,
    params: {
      id
    }
  });
};
