import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { cityReducer } from './city/reducer';
import { forecastReducer } from './forecast/reducer';

const store = configureStore({
  reducer: {
    city: cityReducer,
    forecast: forecastReducer
  },
  enhancers: [applyMiddleware(thunk)]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
