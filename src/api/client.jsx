import axios from 'axios';
import {API_KEY} from './api_key'

const client = axios.create({
    baseURL: process.env.REACT_APP_PROXY || "http://api.dromii.com:8080",
    headers: {
      'apikey': API_KEY,
      'Content-Type': 'application/json'
    }
  });


  export default client;