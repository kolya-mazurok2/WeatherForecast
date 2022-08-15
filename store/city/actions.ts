import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCities, getCityForecasts } from '../../services/http/city/methods';
import { City } from '../../types';
import { SLICE_NAME } from './constants';

export const getAll = createAsyncThunk(`${SLICE_NAME}/getAll`, async (): Promise<City[]> => {
  const response = await getCities();
  return Array.isArray(response.data) ? response.data : [];
});

export const get = createAsyncThunk(
  `${SLICE_NAME}/get`,
  async (id: number): Promise<City | undefined> => {
    const response = await getCityForecasts(id);
    return response.data;
  }
);
