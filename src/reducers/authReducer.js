import { put, call, takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, REFRESH_TOKEN_REQUEST, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_FAILURE } from '../actions/authActions';
import { loginApi, signupApi, refreshTokenApi } from '../api/authApi';

const initialState = {
  isLoggedIn: true,
  email: '',
  error: '',
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true, email: action.payload.email };
    case LOGIN_FAILURE:
      return { ...state, error: action.payload.error };
    case SIGNUP_SUCCESS:
      return { ...state, isLoggedIn: true, email: action.payload.email };
    case SIGNUP_FAILURE:
      return { ...state, error: action.payload.error };
    case REFRESH_TOKEN_SUCCESS:
      return { ...state, isLoggedIn: true, email: action.payload.email };
    case REFRESH_TOKEN_FAILURE:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
}

export default authReducer;
