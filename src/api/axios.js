import axios from 'axios';
import { getCookie, removeCookie, setCookie } from '../untils/cookies';
import { apikey } from './apikey';
import { getRefreshToken } from './auth';

const authAxios = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

authAxios.interceptors.request.use(
  async (config) => {

    let access = getCookie('access');
    const refresh = getCookie('refresh');
    const username = getCookie('username');

    if (!access) {
      access = await getRefreshToken(refresh, username);
    }

    if (!access && !refresh) {
      //로그아웃, 로그인 페이지 강제 이동
      removeCookie('access');
      removeCookie('refresh');
      removeCookie('username');
    }

    config.headers['apikey'] = apikey;
    config.headers['access'] = access;
    config.headers['refresh'] = refresh;
    config.headers['username'] = username;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authAxios.interceptors.response.use(
  async (config) => {
    if (config.status === 200) {
      if (config.data.access && config.data.refresh) {
        setCookie('refresh', config.data.refresh);
      }
    }

    if (
      config.data.code === '-900' ||
      config.data.message === 'expired access token'
    ) {
      const refresh = getCookie('refresh');
      const username = getCookie('username');
      await getRefreshToken(refresh, username);
    }

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default authAxios;
