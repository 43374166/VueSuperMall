import {request} from './request'

const getProfileData = () => {
  return request({
    url: '/data.php'
  })
}

export {getProfileData}