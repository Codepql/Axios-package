import type {AxiosRequestConfig, AxiosResponse } from "axios"

export interface PLInterceptors {
  requsetSuccseeFn: (config: AxiosRequestConfig) => AxiosRequestConfig
  requsetFailureFn: (err: any) => any
  responseSuccseeFn: (config: AxiosResponse) => AxiosResponse
  responseFailureFn: (err: any) => any
}

// 针对 AxiosRequestConfig 配置进行拓展
export interface PLRequsetConfig extends AxiosRequestConfig {
  interceptors?: PLInterceptors
}