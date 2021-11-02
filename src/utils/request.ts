import type { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import axios from 'axios';
import { message } from 'antd';
import Cookie from "js-cookie";

axios.create({
  baseURL: '',
  timeout: 500000
})

axios.defaults.baseURL = ''

// 添加请求拦截器
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = Cookie.get('token')
    // 获取用户token，用于校验
    if (token) {
      if (config) {
        if (config.headers) {
          config.headers.token = token
        }
      }
      
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

// 添加响应拦截器，拦截登录过期或者没有权限
axios.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
      return response
  },
  (error: AxiosError) => {
    message.error(error.message);

    return Promise.reject(error);
  },
);

// 统一发起请求的函数
export function request<T>(options: AxiosRequestConfig) {
  return axios.request<T>(options);
}
