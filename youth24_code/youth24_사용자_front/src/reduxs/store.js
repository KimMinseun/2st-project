import { configureStore } from '@reduxjs/toolkit';
import policyReducers from './reducers/policy_reducer';
import boardReducers from './reducers/board_reducer';

const store = configureStore({
  reducer: { policy: policyReducers, board: boardReducers },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
