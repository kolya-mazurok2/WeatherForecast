import { createSlice } from '@reduxjs/toolkit';
import { City } from '../../types';
import { get, getAll } from './actions';
import { SLICE_NAME } from './constants';

export interface State {
  entity?: City;
  entities: City[];
}

export const INITIAL_STATE: State = {
  entity: undefined,
  entities: []
};

const slice = createSlice({
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(get.fulfilled, (state, payload) => {
      state.entity = payload.payload;
    });

    builder.addCase(getAll.fulfilled, (state, payload) => {
      state.entities = payload.payload;
    });
  }
});

export const cityReducer = slice.reducer;
