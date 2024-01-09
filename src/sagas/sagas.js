// sagas.js
import { takeEvery, call, put } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/actionTypes';

function* loginSaga(action) {
  try {
    const response = yield call(fetch, '/api/login', {
      method: 'POST',
      body: JSON.stringify(action.payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = yield call([response, 'json']);
    if (data.success) {
      yield put({ type: LOGIN_SUCCESS, payload: data.user });
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, payload: error.message });
  }
}

export function* watchLoginSaga() {
  yield takeEvery(LOGIN_REQUEST, loginSaga);
}
