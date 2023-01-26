import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userData';

const rootReducer = combineReducers({
  userReducer
})

export const setupStore = () => {
  return configureStore ({
    reducer: rootReducer
  })
}
