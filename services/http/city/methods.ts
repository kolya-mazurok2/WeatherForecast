import { HTTP_RESPONSE } from '../types';
import { City, ForecastType } from '../../../types';
import CITY_ENDPOINTS from './endpoints';
import { get } from '../methods';

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

export const getCityForecasts = (
  id: number,
  type: ForecastType = 'current'
): Promise<HTTP_RESPONSE<City>> =>
  get({
    endpointPattern: CITY_ENDPOINTS.cityForecasts,
    params: {
      id
    },
    queryParams: {
      type
    }
  });
