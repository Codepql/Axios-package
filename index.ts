import { BASE_URL, TIMEOUT } from "./config";
import PLRequset from "./requset";

// 创建实例(可以创建很多实例)
// 实例 1
const plReuset = new PLRequset({
  baseURL:BASE_URL,
  timeout:TIMEOUT
})

// 实例 2
// export const plReuset2 = new PLRequset({
//   baseURL: "http://xxxxxxxx/api",
//   timeout: 8000,
//   interceptors: {
//     requsetSuccseeFn:(config) => {
//       console.log("针对xxx请求成功拦截")
//       return config
//     },
//     requsetFailureFn:(err) => {
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

export default plReuset