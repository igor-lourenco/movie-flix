import axios, { AxiosRequestConfig } from 'axios';
import history from './history';
import qs from 'qs'; 

type LoginResponse = { // dados da resposta do login
    access_token: string,
    token_type: string,
    refresh_token: string,
    expires_in: number,
    scope: string,
    userName: string,
    userId: number
}

const tokenKey = 'authData';

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'myclientid'; 
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'myclientsecret'; 

type LoginData = {
    username:string;
    password: string;
}

export const requestBackendLogin = (loginData : LoginData) => {

    const headers = { //cabeçalho da requisição de autorização do postman
        'Content-Type' : 'application/x-www-form-urlencoded',
        Authorization : 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET)
    }

    const data = qs.stringify ({ //Header da requisição de autorização do postman
        ...loginData, //dados chegados do type loginData 
        grant_type : 'password'
    });

    return axios({method: 'POST', baseURL: BASE_URL, url: '/oauth/token', data, headers});
}

export const requestBackend = (config : AxiosRequestConfig) => {
    const headers = config.withCredentials ? {
        ...config.headers,
        Authorization: "Bearer" + getAuthData().access_token //pega o token e coloca no corpo da requisição
    } : config.headers;

    return axios({...config, baseURL: BASE_URL, headers});
}


export const saveAuthData = (obj : LoginResponse) => { //funcao pra salvar os dados do login no localStorage

    localStorage.setItem(tokenKey, JSON.stringify(obj));
}

export const getAuthData = () => {//pega os dados salvos no localstorage
    const str = localStorage.getItem(tokenKey) ?? '{}';
    return JSON.parse(str) as LoginResponse;
}

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
      if(error.response.status === 401 || error.response.status === 403){
          history.push('/')
      }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
