import { createAsyncThunk } from '@reduxjs/toolkit';
import { getForecast } from '../../services/http/forecast/methods';
import { Forecast } from '../../types';
import { SLICE_NAME } from './constants';

export const get = createAsyncThunk(
  `${SLICE_NAME}/get`,
  async (cityId: number): Promise<Forecast | undefined> => {
    const response = await getForecast(cityId);
    return response.data;
  }
);

const forecastAsyncActions = {
  get
};

export default forecastAsyncActions;
