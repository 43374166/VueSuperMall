import axios from 'axios'

const request = config => {
  const instance = axios.create({
    baseURL: 'http://api.php',
    timeout: 5000
  })

  // 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {

  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data
    // console.log(res);
  }, err => {
    // console.log(err);
  })

  // 发送真正的网络请求
  return instance(config)
}

export {request}