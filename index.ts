import { BASE_URL, TIMEOUT } from "./config";
import PLRequest from "./request";

// 创建实例(可以创建很多实例)
// 实例 1
const plRequest = new PLRequest({
  baseURL:BASE_URL,
  timeout:TIMEOUT
})

// 实例 2
// export const plReuset2 = new PLRequest({
//   baseURL: "http://xxxxxxxx/api",
//   timeout: 8000,
//   interceptors: {
//     requestSuccseeFn:(config) => {
//       console.log("针对xxx请求成功拦截")
//       return config
//     },
//     requestFailureFn:(err) => {
//       console.log("针对xxx请求失败拦截")
//       return err
//     },
//     responseSuccseeFn:(config) => {
//       console.log("针对xxx响应成功拦截")
//       return config
//     },
//     responseFailureFn:(err) => {
//       console.log("针对xxx响应失败拦截")
//       return err
//     }
//   }
// })

export default plRequest