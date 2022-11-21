import { configureStore } from "@reduxjs/toolkit";
import teamsReducer from '../features/teamsSlice';
import membersReducer from '../features/membersSlice';

export const store = configureStore({
  reducer: {
    teams: teamsReducer,
    teamNames: membersReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;