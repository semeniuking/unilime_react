import {combineReducers, configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import {AuthReducer} from "./store/reducers/AuthReducers";

const reducers = combineReducers({
  auth: AuthReducer,
})

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: AuthReducer,
  },
});
