// import { from } from "core-js/fn/array";
import {request} from './request'

export const getDetailData = () => {
  return request({
    url: '/detail'
  })
}