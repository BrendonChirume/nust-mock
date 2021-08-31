import { combineReducers } from 'redux';
import authReducer from './authReducer';
import modal from './modal';

export default function rootReducer() {
  return combineReducers({
    auth: authReducer,
    modalData: modal,
  });
}
