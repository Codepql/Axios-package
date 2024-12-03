import axios from "axios"
import type { AxiosInstance, AxiosRequestConfig} from "axios"
import type { PLRequsetConfig } from './type'

// 拦截器 蒙版loading/token/配置修改


class PLRequset {
  instance: AxiosInstance

  // request实例 => axios实例
  constructor(config: PLRequsetConfig) {
    this.instance = axios.create(config)

      // 每个 instance 都添加一个拦截器
    this.instance.interceptors.request.use(config => {
      // loading / token
      // console.log("全局请求成功拦截")
      return config
    }, err => {
      // console.log("全局请求失败拦截")
      return err
    })

    this.instance.interceptors.response.use(res => {
      // console.log("全局响应成功拦截")
      return res
    }, err => {
      // console.log("全局响应失败拦截")
      return err
    })


    // 针对特定的PLRequest实例添加拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requsetSuccseeFn,
      config.interceptors?.requsetFailureFn
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccseeFn,
      config.interceptors?.responseFailureFn
    )

  }




  requset(config: AxiosRequestConfig) {
    return this.instance.request(config)
  }

  get<T = any>(config: PLRequsetConfig<T>) {
    return this.requset({...config, method: "GET"})
  }
  post<T = any>(config: PLRequsetConfig<T>) {
    return this.requset({...config, method: "POST"})
  }
  delete<T = any>(config: PLRequsetConfig<T>) {
    return this.requset({...config, method: "DELETE"})
  }
  patch<T = any>(config: PLRequsetConfig<T>) {
    return this.requset({...config, method: "PATCH"})
  }
}

export default PLRequset