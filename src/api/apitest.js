const apiUrl = 'http://api.dromii.com:8080';
const apiKey = 'YCmLIC7b8HT6xjd5rL2SPvuMdnYwiQEb'; //추후 .env 파일로 이동예정 (보안이슈)
const contentType = 'application/json';
//const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImtpbGxlcjcwQG5hdmVyLmNvbSIsImlhdCI6MTcwNDI0ODMwMywiZXhwIjoxNzA0MzM0NzAzfQ.II0MSOjFCTNpBd9Ruu8mNeGB70uNyIszhnzXCRB-wgg';

// 쿠키에 토큰 저장 code
function setTokenInCookie(tokenName, tokenValue) {
  document.cookie = `${tokenName}=${tokenValue}; path=/`;
}

// 쿠키에서 토큰 값 가져오는 code
function getTokenFromCookie(tokenName) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${tokenName}=`)) {
      return cookie.substring(tokenName.length + 1);
    }
  }
  return null;
}

// 가장 기본 틀? api 로직
async function callApi(url, method, body) {
    const token = getTokenFromCookie('accessToken');
  if (!token) {
    throw new Error('토큰이 없습니다. 로그인이 필요합니다.');
  }
  const headers = {
    'apikey': apiKey,
    'Content-Type': contentType,
    'Authorization': `Bearer ${getTokenFromCookie('accessToken')}`
  };

  let requestOptions = { method: method, headers: headers };
  if (method === 'POST' || method === 'PUT') {
    requestOptions.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();

        //token 관련 예외처리 code
    if (response.status === 401) {  // access token이 유효하지 않은 경우
        const refreshedTokens = await refreshToken(getTokenFromCookie('refreshToken')); // 리프레쉬 토큰으로 액세스 토큰을 새로 발급
        headers['Authorization'] = `Bearer ${refreshedTokens.access}`; // 새로 발급받은 액세스 토큰으로 헤더를 업데이트
        setTokenInCookie('accessToken', refreshedTokens.access); // 새로 발급받은 액세스 토큰을 쿠키에 저장
        setTokenInCookie('refreshToken', refreshedTokens.refresh); // 새로 발급받은 리프레쉬 토큰을 쿠키에 저장
        return callApi(url, method, headers, body); // 업데이트된 헤더로 다시 API를 호출합니다.
       //await refreshToken();  // refresh token으로 새로운 access token을 발급
        //return callApi(url, method, body);  // 새로운 access token으로 다시 API를 호출
      } else if (response.status !== 200) {
        throw new Error(`API 호출 에러: ${response.status}`);
      }
    return data;
  } catch (error) {
    //console.error('API 호출 중 오류가 발생했습니다:', error);
    throw error;
  }
}

// 토큰 갱신 API 테스트 code
function refreshToken(refreshToken) {
const url = `${apiUrl}/api/v2/refresh`;
const headers = {
'apikey': 'YCmLIC7b8HT6xjd5rL2SPvuMdnYwiQEb',
'Content-Type': 'application/json'
};
return callApi(url, 'GET', headers, { refresh: refreshToken })
.then(data => ({
//result: data.result,
access: data.access,
refresh: data.refresh
}));
}
// 토큰 갱신 API 테스트 실행
//refreshToken('eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImtpbGxlcjcwQG5hdmVyLmNvbSIsImlhdCI6MTcwNDI0OTMyOCwiZXhwIjoxNzA0ODU0MTI4fQ.9Q8xDK990wjHDUkDUAbZeUlC2_NmjOad78x52A8JSmc');


// 시스템 상태 조회 API 테스트 code
async function checkSystemStatus() {
const url = `${apiUrl}/api/v2/health`;
try {
const data = await callApi(url, 'GET');
console.log('시스템 상태:', data.message);
} catch (error) {
console.error('시스템 상태 조회 에러:', error);
}
}
// 시스템 상태 조회 API 테스트 실행
checkSystemStatus();


// 사용자 등록 API 테스트 code
async function registerUser(email, emailConfirm, password, passwordConfirm, name, company, agreeTerms, agreePersonalInfo) {
const url = `${apiUrl}/api/v2/users`;
const body = {
email: email,
emailConfirm: emailConfirm,
password: password,
passwordConfirm: passwordConfirm,
name: name,
company: company,
agreeTerms: agreeTerms,
agreePersonalInfo: agreePersonalInfo
};

try {
const data = await callApi(url, 'POST', body);
console.log('사용자 등록 결과:', data.result);
} catch (error) {
console.error('사용자 등록 에러:', error);
}
}
// 사용자 등록 API 테스트 실행
//registerUser('test@test.com', 'test@test.com', 'test1234', 'test1234', 'John Doe', 'ABC Company', true, true);


// 로그인 API 테스트
async function loginUser(email, password) {
const url = `${apiUrl}/api/v2/login`;
const body = {
email: email,
password: password
};
try {
const data = await callApi(url, 'POST', body);
if (data && data.token) {
setTokenInCookie('accessToken', data.token);
}
console.log('로그인 결과:', data.result);
console.log('Access Token:', data.access);
console.log('Refresh Token:', data.refresh);

setTokenInCookie('accessToken', data.access);
setTokenInCookie('refreshToken', data.refresh);
} catch (error) {
console.error('로그인 에러:', error);
}
}
// 로그인 API 테스트 입력 예시
loginUser('killer70@naver.com', '1234');


// 데이터셋 그룹 생성 API 테스트
function createDatasetGroup(groupName, description, accessToken) {
const url = `${apiUrl}/api/v2/groups`;
const headers = {
'apikey': 'YCmLIC7b8HT6xjd5rL2SPvuMdnYwiQEb',
'Authorization': `Bearer ${accessToken}`,
'Content-Type': 'application/json'
};
return callApi(url, 'POST', headers, { gname: groupName, description })
.then(data => ({
result: data.result,
gcode: data.gcode
}));
}
// 데이터셋 그룹 생성 API 테스트 실행
//createDatasetGroup('Dataset Group2', 'This is a test dataset group','' );


//데이터셋 그룹 목록 API 테스트
export function showDatasetGroup(accessToken) {
const url = `${apiUrl}/api/v2/groups`;
const headers = {
'apikey': 'YCmLIC7b8HT6xjd5rL2SPvuMdnYwiQEb',
'Authorization': `Bearer ${accessToken}`,
'Content-Type': 'application/json'
};
return callApi(url, 'get', headers)
.then(data => data)
.catch(error => { console.error(error); return []; });
}

//데이터셋 그룹 목록 API 테스트 실행
showDatasetGroup('').then(result => console.log(result));





//데이터 그룹 삭제 API 테스트
function deleteDatasetGroup(gcode, accessToken) {
const url = `${apiUrl}/api/v2/${gcode}/groups`;
const headers = {
'apikey': 'YCmLIC7b8HT6xjd5rL2SPvuMdnYwiQEb',
'Authorization': `Bearer ${accessToken}`,
'Content-Type': 'application/json'
};
return callApi(url, 'DELETE', headers)
.then(data => ({
code: data.code,
message: data.message,
result: data.result,
gcode: data.gcode
}));
}
// 데이터셋 그룹 삭제 API 테스트 실행
//deleteDatasetGroup('g_24', 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImtpbGxlcjcwQG5hdmVyLmNvbSIsImlhdCI6MTcwNDI0ODMwMywiZXhwIjoxNzA0MzM0NzAzfQ.II0MSOjFCTNpBd9Ruu8mNeGB70uNyIszhnzXCRB-wgg')





//데이터 셋 생성
function createDataset(accessToken, gcode, dname, category, area, description, type) {
const url = `${apiUrl}/api/v2/datasets`;
const headers = {
'apikey': 'YCmLIC7b8HT6xjd5rL2SPvuMdnYwiQEb',
'Authorization': `Bearer ${accessToken}`,
'Content-Type': 'application/json'
};
return callApi(url, 'post', headers, { gcode, dname, category, area, description, type })
.then(data => ({
result: data.result,
dname: data.dname,
gcode: data.gcode
}));
}
//createDataset('', 'g_20', 'name', 'category', 'area', 'description', 'type')

//데이터 셋 그룹 목록 API 테스트
function getDatasetList(accessToken) {
const url = `${apiUrl}/api/v2/datasets`;
const headers = {
'apikey': 'YCmLIC7b8HT6xjd5rL2SPvuMdnYwiQEb',
'Authorization': `Bearer ${accessToken}`,
'Content-Type': 'application/json'
};
return callApi(url, 'get', headers)
.then(data => data);
}