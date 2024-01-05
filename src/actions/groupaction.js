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