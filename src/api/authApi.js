import axios from 'axios';

const API_KEY = 'YCmLIC7b8HT6xjd5rL2SPvuMdnYwiQEb';

export const loginApi = (email, password) => {
  return axios.post(
    'http://api.dromii.com:8080/api/v2/login',
    { email, password },
    { headers: { 'apikey': API_KEY, 'Content-Type': 'application/json' } }
  );
};

export const signupApi = (email, password, name, company, agreeTerms, agreePersonalInfo) => {
  return axios.post(
    'http://api.dromii.com:8080/api/v2/users',
    { email, password, name, company, agreeTerms, agreePersonalInfo },
    { headers: { 'apikey': API_KEY, 'Content-Type': 'application/json' } }
  );
};

export const refreshTokenApi = (refresh, email) => {
  return axios.post(
    'http://api.dromii.com:8080/api/v2/refresh',
    { },
    { headers: { 'apikey': API_KEY, 'refresh': refresh, 'email': email, 'Content-Type': 'application/json' } }
  );
};
