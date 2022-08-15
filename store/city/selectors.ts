import { createSelector } from 'reselect';
import { RootState } from '../';

const cityState = (state: RootState) => state.city;

export const getCitiesSelector = createSelector(cityState, (city) => city.entities);
export const getCitySelector = createSelector(cityState, (city) => city.entity);
