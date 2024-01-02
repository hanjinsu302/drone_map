import axios from 'axios';



import {API_KEY} from './api_key'

const client = axios.create({
    baseURL: process.env.REACT_APP_PROXY || "http://api.dromii.com:8080",
    headers: {
      'apikey': API_KEY,
      'Content-Type': 'application/json'
    }
  });

export const getCancelTokenSrc = () => axios.CancelToken.source();

export const setBearer = token => {
  client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const removeBearer = () => {
  client.defaults.headers.common['Authorization'] = '';
};


  export default client;