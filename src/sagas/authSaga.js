import { put, call, takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, REFRESH_TOKEN_REQUEST, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_FAILURE } from '../actions/authActions';
import { loginApi, signupApi, refreshTokenApi } from '../api/authApi';

function* loginSaga(action) {
  try {
    const response = yield call(loginApi, action.payload.email, action.payload.password);
    yield put({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, payload: error });
  }
}

function* signupSaga(action) {
  try {
    const response = yield call(signupApi, action.payload.email, action.payload.password, action.payload.name, action.payload.company, action.payload.agreeTerms, action.payload.agreePersonalInfo);
    yield put({ type: SIGNUP_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: SIGNUP_FAILURE, payload: error });
  }
}

function* refreshTokenSaga(action) {
  try {
    const response = yield call(refreshTokenApi, action.payload.refresh, action.payload.email);
    yield put({ type: REFRESH_TOKEN_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: REFRESH_TOKEN_FAILURE, payload: error });
  }
}

export default function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
  yield takeLatest(SIGNUP_REQUEST, signupSaga);
  yield takeLatest(REFRESH_TOKEN_REQUEST, refreshTokenSaga);
}
