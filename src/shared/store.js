import { configureStore } from '@reduxjs/toolkit';
import reducers from './store/reducers';
import { initApi } from '../client/clientApi';

initApi();

const store = configureStore({
  reducer: reducers,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
