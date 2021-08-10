import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default function rootReducer() {
  return combineReducers({
    auth: authReducer,
  });
}
