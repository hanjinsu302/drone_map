import client from './client';
//import {API_KEY} from './api_key'

const API_KEY = 'YCmLIC7b8HT6xjd5rL2SPvuMdnYwiQEb';

export const loginApi = ({email, password}) =>
client.post('/api/v2/login',
{ email, password },
{ headers: { 'apikey': API_KEY, 'Content-Type' : 'application/json' } }
);
;


export const signupApi = ({email, emailConfirm, password, passwordConfirm, name, company, agreeTerms, agreePersonalInfo}) =>
client.post('/api/v2/users',
{ email, emailConfirm, password, passwordConfirm, name, company, agreeTerms, agreePersonalInfo },
{ headers: { 'apikey': API_KEY, 'Content-Type': 'application/json' } }
);
;

export const refreshTokenApi = ({refresh, email}) =>
client.get('/api/v2/refresh',
{ },
{ headers: { 'apikey': API_KEY, 'refresh': 'refresh token', 'email': email, 'Content-Type': 'application/json' } }
);
; 

export const datasetgroups = ({gname, description}) =>
client.post('/api/v2/groups',{},{headers: { 'apikey': API_KEY,'Authorization' : 'token' ,'Content-Type' : 'application/json' }})