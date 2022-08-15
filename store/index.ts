import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { cityReducer } from './city/reducer';

const store = configureStore({
  reducer: {
    city: cityReducer
  },
  enhancers: [applyMiddleware(thunk)]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
