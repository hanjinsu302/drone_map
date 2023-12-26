export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const REFRESH_TOKEN_REQUEST = 'REFRESH_TOKEN_REQUEST';
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAILURE = 'REFRESH_TOKEN_FAILURE';

export const requestLogin = (email, password) => ({ type: LOGIN_REQUEST, payload: { email, password } });
export const requestSignup = (email, password, name, company, agreeTerms, agreePersonalInfo) => ({ type: SIGNUP_REQUEST, payload: { email, password, name, company, agreeTerms, agreePersonalInfo } });
export const requestRefreshToken = (refresh, email) => ({ type: REFRESH_TOKEN_REQUEST, payload: { refresh, email } });
