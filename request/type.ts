import type {AxiosRequestConfig, AxiosResponse } from "axios"

export interface PLInterceptors {
  requestSuccseeFn: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestFailureFn: (err: any) => any
  responseSuccseeFn: (config: AxiosResponse) => AxiosResponse
  responseFailureFn: (err: any) => any
}

// 针对 AxiosRequestConfig 配置进行拓展
export interface PLRequestConfig extends AxiosRequestConfig {
  interceptors?: PLInterceptors
}