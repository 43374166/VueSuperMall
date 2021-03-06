import axios from 'axios'

const request = config => {
  const instance = axios.create({
    baseURL: 'http://php.test.com',
    timeout: 5000
  })

  // 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {

  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    // console.log(err);
  })

  // 发送真正的网络请求
  return instance(config)
}

export {request}