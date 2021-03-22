import {request} from './testapi.js'

const getData = () => {
  return request({
    url: '/data.php'
  })
}

export {getData}
// console.log(getData);