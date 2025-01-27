import {configureStore} from '@reduxjs/toolkit';
import GlobalReducer from '../Global/Global';

export const store = configureStore({
  reducer: {
    global: GlobalReducer,
  },
});
