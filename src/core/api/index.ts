import axios from 'axios';
import nprogress from 'nprogress';
import config from '../../utils/config';
import { dataURLtoFile } from '../../utils/helper'

let headers = {
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json',
};

const API = axios.create({
  baseURL: `${config.API_URL}/api/v1`,
  headers,
});

API.interceptors.request.use(function(config) {
  nprogress.start();
  return config;
}, function(error) {
  // Do something with request error
  nprogress.start();
  return Promise.reject(error);
});

// Add a response interceptor
API.interceptors.response.use(function(response) {
  nprogress.done();
  return response;
}, function(error) {
  nprogress.done();
  return Promise.reject(error);
});

export default {
  initHeaders(token){
    return new Promise((resolve) => {
      API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      resolve(true);
    })
  },
  getTokenFromCode(params){
    return axios.get(`${config.API_URL}${config.GET_TOKEN_FROM_CODE}`, { params });
  },
  getClients() {
    return API.get(config.GET_CLIENTS);
  },
  getJobcodes() {
    return API.get(config.GET_JOBCODES);
  },
  getGroups(){
    return API.get(config.GET_GROUPS);
  },
  authenticateFace(faceImage){
    let bodyFormData = new FormData();
    let image = dataURLtoFile(faceImage, 'image');
    bodyFormData.append('file', image); 
    return axios.post(`${config.API_URL}${config.AUTHENTICATE_FACE}`, bodyFormData)
  },
  getUsers(){
    return API.get(config.GET_USERS);
  },
  getTimeSheet(params){
    return API.get(config.GET_TIMESHEET, { params })
  },
  createTimesheet(data){
    return API.post(config.GET_TIMESHEET, data)
  },
  updateTimesheet(data){
    return API.put(config.GET_TIMESHEET, data)
  }
  
};

