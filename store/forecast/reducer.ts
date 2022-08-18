import { createSlice } from '@reduxjs/toolkit';
import { Forecast } from '../../types';
import { get } from './actions';
import { SLICE_NAME } from './constants';

export interface State {
  entity?: Forecast;
}

export const INITIAL_STATE: State = {
  entity: undefined
};

const slice = createSlice({
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(get.fulfilled, (state, payload) => {
      state.entity = payload.payload;
    });
  }
});

export const forecastReducer = slice.reducer;
