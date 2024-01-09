// actions.js
import { LOGIN_REQUEST } from './actionTypes';

export const requestLogin = (formData) => {
  return {
    type: LOGIN_REQUEST,
    payload: formData
  };
};
