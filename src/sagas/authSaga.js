import { put, call, takeLatest, all } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, REFRESH_TOKEN_REQUEST, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_FAILURE } from '../actions/authActions';
import { loginApi, signupApi, refreshTokenApi } from '../api/authApi';
import { setDatasetGroupResult } from '../actions/authActions';
import { FETCH_GROUP_LIST_REQUEST, fetchGroupListSuccess, fetchGroupListFailure } from '../actions/authActions';
//import { callApi } from '../api/apitest'; // apitest.js에서 callApi 함수를 가져옵니다.




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
    const response = yield call(signupApi, action.payload.email, action.payload.emailConfirm, action.payload.password, action.payload.passwordConfirm, action.payload.name, action.payload.company, action.payload.agreeTerms, action.payload.agreePersonalInfo);
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




// const apiUrl = 'http://api.dromii.com:8080';
// let accessToken = ''
// // API 호출을 처리하는 사가
// function* fetchGroupListSaga(action) {
//   try {
//     const accessToken = action.payload;
//     const url = `${apiUrl}/api/v2/groups`;
//     const headers = {
//       'apikey': 'YCmLIC7b8HT6xjd5rL2SPvuMdnYwiQEb',
//       'Authorization': `Bearer ${accessToken}`,
//       'Content-Type': 'application/json',
//     };

//     const response = yield call(callApi, url, 'get', headers);
//     yield put(fetchGroupListSuccess(response));
//   } catch (error) {
//     yield put(fetchGroupListFailure(error));
//   }
// }

// // 사가 모니터링 함수
// function* watchFetchGroupList() {
//   yield takeLatest(FETCH_GROUP_LIST_REQUEST, fetchGroupListSaga);
// }

// export default function* rootSaga() {
//   yield all([
//     watchFetchGroupList(),
//     // 다른 필요한 사가들을 추가할 수 있습니다.
//   ]);
// }


