import axios from 'axios';
import jwtDecode from 'jwt-decode';
import moment from 'moment';
import { setCookie } from '../utils/cookies';
 import { apikey } from './apikey';

export const login = async (email, password) => {
  try {
    console.log("email")
    console.log(email)
    console.log(password)
    const result = await axios.post(
      '/api/v2/user',
      {
        email,
        password,
      },
      { headers: { apikey } }
    );

    const decodeToken = jwtDecode(result.data.access);
    const decodeRefresh = jwtDecode(result.data.refresh);

    const getAccessExpires = moment()
      .add(decodeToken.exp, 'millisecond')
      .toDate();
    const getRefreshExpires = moment()
      .add(decodeRefresh.exp, 'millisecond')
      .toDate();

    setCookie('access', result.data.access, {
      path: '/',
      expires: getAccessExpires,
    });
    setCookie('refresh', result.data.refresh, {
      path: '/',
      //expires: getRefreshExpires,
    });

    setCookie('username', email);

    localStorage.setItem('user', result.data.user);
    result.data.superUser &&
      localStorage.setItem('superUser', result.data.superUser);

    return result;
  } catch (err) {
    console.log(err);
  }
};

export const getRefreshToken = async (refresh, username) => {
  try {
    const result = await axios.post('/api/v2/refresh', null, {
      headers: { apikey, refresh, username },
    });

    const decodeToken = jwtDecode(result.data.access);
    const getAccessExpires = moment()
      .add(decodeToken.exp, 'millisecond')
      .toDate();

    setCookie('access', result.data.access, {
      path: '/',
      expires: getAccessExpires,
    });

    return result.data.access;
  } catch (err) {
    console.log(err);
  }
};

export const createAccount = async (form) => {
  try {
    const result = await axios.post('/api/dromii/account/accountWrite', form, {
      headers: { apikey },
    });

    return result.data;
  } catch (err) {
    console.log(err);
  }
};
