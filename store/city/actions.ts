import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCities, getCityForecasts } from '../../services/http/city/methods';
import { City, ForecastType } from '../../types';
import { SLICE_NAME } from './constants';

export const getAll = createAsyncThunk(`${SLICE_NAME}/getAll`, async (): Promise<City[]> => {
  const response = await getCities();
  return Array.isArray(response.data) ? response.data : [];
});

interface GetParams {
  id: number;
  type?: ForecastType;
}

export const get = createAsyncThunk(
  `${SLICE_NAME}/get`,
  async ({ id, type = 'current' }: GetParams): Promise<City | undefined> => {
    const response = await getCityForecasts(id, type);
    return response.data;
  }
);

const cityAsyncActions = {
  get,
  getAll
};

export default cityAsyncActions;
