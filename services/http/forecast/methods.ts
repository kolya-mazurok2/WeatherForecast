import { Forecast } from '../../../types';
import { get } from '../methods';
import { HTTP_RESPONSE } from '../types';
import FORECAST_ENDPOINTS from './endpoints';

export const getForecast = (cityId: number): Promise<HTTP_RESPONSE<Forecast>> =>
  get({
    endpointPattern: FORECAST_ENDPOINTS.forecasts,
    queryParams: {
      cityId
    }
  });
