import { combineReducers } from 'redux';
import {
  FETCH_GROUP_LIST_REQUEST,
  FETCH_GROUP_LIST_SUCCESS,
  FETCH_GROUP_LIST_FAILURE,
} from './actions';

// 초기 상태 정의
const initialState = {
  groupList: [],
  isLoading: false,
  error: null,
};

// 그룹 목록 리듀서
const groupListReducer = (state = initialState.groupList, action) => {
  switch (action.type) {
    case FETCH_GROUP_LIST_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

// 로딩 상태 리듀서
const isLoadingReducer = (state = initialState.isLoading, action) => {
  switch (action.type) {
    case FETCH_GROUP_LIST_REQUEST:
      return true;
    case FETCH_GROUP_LIST_SUCCESS:
    case FETCH_GROUP_LIST_FAILURE:
      return false;
    default:
      return state;
  }
};

// 에러 리듀서
const errorReducer = (state = initialState.error, action) => {
  switch (action.type) {
    case FETCH_GROUP_LIST_FAILURE:
      return action.payload;
    case FETCH_GROUP_LIST_REQUEST:
    case FETCH_GROUP_LIST_SUCCESS:
      return null;
    default:
      return state;
  }
};

// 루트 리듀서
const rootReducer = combineReducers({
  groupList: groupListReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default rootReducer;
