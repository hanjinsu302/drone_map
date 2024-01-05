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
export const requestSignup = (email, emailConfirm, password, passwordConfirm, name, company, agreeTerms, agreePersonalInfo) => ({ type: SIGNUP_REQUEST, payload: { email, emailConfirm, password, passwordConfirm, name, company, agreeTerms, agreePersonalInfo } });
export const requestRefreshToken = (refresh, email) => ({ type: REFRESH_TOKEN_REQUEST, payload: { refresh, email } });

//group
// actionTypes 정의
export const FETCH_GROUP_LIST_REQUEST = 'FETCH_GROUP_LIST_REQUEST';
export const FETCH_GROUP_LIST_SUCCESS = 'FETCH_GROUP_LIST_SUCCESS';
export const FETCH_GROUP_LIST_FAILURE = 'FETCH_GROUP_LIST_FAILURE';

// 액션 생성자 함수
export const fetchGroupListRequest = () => ({
  type: FETCH_GROUP_LIST_REQUEST,
});

export const fetchGroupListSuccess = (groupList) => ({
  type: FETCH_GROUP_LIST_SUCCESS,
  payload: groupList,
});

export const fetchGroupListFailure = (error) => ({
  type: FETCH_GROUP_LIST_FAILURE,
  payload: error,
});
