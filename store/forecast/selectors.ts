import { createSelector } from 'reselect';
import { RootState } from '../';

const forecastState = (state: RootState) => state.forecast;

export const getForecastSelector = createSelector(forecastState, (forecast) => forecast.entity);
