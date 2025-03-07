import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import settingsReducer from './slices/settingsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;