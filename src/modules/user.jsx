import {
    setBearer,
    removeBearer,
    setUserInfo,
    removeUserInfo,
  } from "../api/client";
  import jwtDecode from 'jwt-decode';
  import produce from 'immer';
  import {createAction, handleActions,} from 'redux-actions';




const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  'user/LOGIN'
);
const [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE] = createRequestActionTypes(
    'user/SIGNUP'
);
const SIGNUP_DUP = 'user/SIGNUP_DUP';
const [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE] = createRequestActionTypes(
  'user/LOGOUT',
);
const SET_USER = 'user/SET_USER';
const SET_ACCESS_TOKEN = 'user/SET_ACCESS_TOKEN';
const [REFRESH, REFRESH_SUCCESS, REFRESH_FAILURE] = createRequestActionTypes(
  'user/REFRESH',
);
const RESET_AUTH_STATE = 'user/RESET_AUTH_STATE';

export const login = createAction(
  LOGIN,
  ({ email, password }) => ({ email, password }),
);
export const logout = createAction(LOGOUT);

export const signup = createAction(
    SIGNUP,
    ({ email, emailConfirm, password, passwordConfirm, name, company, agreeTerms, agreePersonalInfo}) => ({ email, emailConfirm, password, passwordConfirm, name, company, agreeTerms, agreePersonalInfo  }),
);

export const setUser = createAction(
  SET_USER,
  ({ user, mode, refresh }) => ({ user, mode, refresh }),
);
const setAccessToken = createAction(
  SET_ACCESS_TOKEN,
  access => access,
);
export const refreshToken = createAction(
  REFRESH,
  force => force,
);

function* loginSaga({ payload: { email, password } }) {
  yield put(startLoading(LOGIN)); // the start of the loading
  try {
    const response = yield call(
      api.login,
      {email, password },
    );
    const { user, mode, refresh, access, superUser} = response.data;

    setUserInfo({ user, mode, access, refresh, superUser });
    setBearer(access);

    yield put(setUser({ user, mode, refresh }));
    yield put(setAccessToken({ access }));
    yield put({ type: LOGIN_SUCCESS });
  } catch (e) {
    yield put({
      type: LOGIN_FAILURE,
      payload: e,
    });
  }
  yield put(finishLoading(LOGIN)); // the end of the loading
}

function* logoutSaga() {
  try {
    removeBearer();
    removeUserInfo();

    yield put({ type: LOGOUT_SUCCESS });
    yield put(initializeJob());
    yield put(initializeProgress());
    yield put(initializePhoto());
  } catch (e) {
    yield put({
      type: LOGOUT_FAILURE,
      payload: e,
    });
  }
}

function* signupSaga({ payload: { email, emailConfirm, password, passwordConfirm, name, company, agreeTerms, agreePersonalInfo } }) {
    yield put(startLoading(SIGNUP)); // the start of the loading
    try {
        console.log(SIGNUP_DUP);
        const response = yield call(
            api.signup,
            { email, emailConfirm, password, passwordConfirm, name, company, agreeTerms, agreePersonalInfo },
        );
        console.log(response.data);
        if (response.data.RESULT == '0') {
            console.log('signup success');
            const {code, message} = response.data;
            yield put({type: SIGNUP_SUCCESS});
        }
        else if (response.data.RESULT == '999') {
            console.log('signup duplicated');
            const {code, message} = response.data;
            yield put({
                type: SIGNUP_DUP,
                payload: "dup",
            });
        } else {
            yield put({
                type: SIGNUP_FAILURE,
                payload: "fail",
            });
        }
    } catch (e) {
        yield put({
            type: SIGNUP_FAILURE,
            payload: e,
        });
    }
    yield put(finishLoading(SIGNUP)); // the end of the loading
}

export function* refreshTokenSaga(action) {
  // refresh the access token with the refresh token
  try {
    const user = yield select(state => state.user);
    if (!user.auth) {
      throw new Error('User is not authenticated');
    }

    const force = action.payload;
    if (force || isExpired(user.accessToken.exp)) {
      const { data: { access } } =
        yield call(api.refreshToken, user.refreshToken.token);

      setBearer(access);

      yield put(setAccessToken({ access }));
      yield put({ type: REFRESH_SUCCESS });
    }
  } catch (e) {
    // If only the refresh token is also expired.
    // But it's unlikely because App component would be checking it.
    yield put({
      type: REFRESH_FAILURE,
      payload: e,
    });
  }
}

export function* userSaga() {
  yield takeLeading(LOGIN, loginSaga);
  yield takeLeading(LOGOUT, logoutSaga);
  yield takeLeading(REFRESH, refreshTokenSaga);
  yield takeLeading(SIGNUP, signupSaga);
}

const initialState = {
  auth: false,
  user: null,
  mode: null,
  refreshToken: {
    token: null,
    exp: null,
  },
  accessToken: {
    token: null,
    exp: null,
  },
  loginError: null,
  logoutError: null,
  refreshError: null,
  signupError: null,
  signupState: false,
};

const user = handleActions(
  {
    [LOGIN_SUCCESS]: state =>
      produce(state, draft => {
        draft.loginError = null;
      }),
    [LOGIN_FAILURE]: (state, { payload: error }) =>
      produce(state, draft => {
        draft.auth = false;
        draft.loginError = error;
      }),

    [SIGNUP_SUCCESS]: state =>
      produce(state, draft => {
          draft.signupError = null;
          draft.signupState = true;
      }),
    [SIGNUP_FAILURE]: (state, { payload: error }) =>
      produce(state, draft => {
          draft.auth = false;
          draft.signupError = error;
          draft.signupState = false;
      }),
    [SIGNUP_DUP]: (state, { payload: error }) =>
          produce(state, draft => {
              draft.auth = false;
              draft.signupError = error;
              draft.signupState = false;
      }),

    [LOGOUT_SUCCESS]: state => initialState,
    [LOGOUT_FAILURE]: (state, { payload: error }) =>
      produce(state, draft => {
        draft.logoutError = error;
      }),

    [RESET_AUTH_STATE]: state => initialState,

    [SET_USER]: (state, { payload: { user, mode, refresh } }) =>
      produce(state, draft => {
        draft.auth = true;
        draft.user = user;
        draft.mode = mode;

        const { exp } = jwtDecode(refresh);
        draft.refreshToken.token = refresh;
        draft.refreshToken.exp = exp;
      }),
    [SET_ACCESS_TOKEN]: (state, { payload: { access } }) =>
      produce(state, draft => {
        const { exp } = jwtDecode(access);
        draft.accessToken.token = access;
        draft.accessToken.exp = exp;
      }),
    [REFRESH_SUCCESS]: state =>
      produce(state, draft => {
        draft.refreshError = null;
      }),
    [REFRESH_FAILURE]: (state, { payload: error }) =>
      produce(state, draft => {
        draft.refreshError = error;
      }),
  },
  initialState,
);

export default user;
