// import { from } from "core-js/fn/array";
import {request} from './request'

export const getDetail = (iid) => {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class Shop {
  constructor(shopinfo) {
    this.logo = shopinfo.shopLogo
    this.name = shopinfo.name
    this.fans = shopinfo.cFans
    this.sells = shopinfo.cSells
    this.score = shopinfo.score
    this.goodscount = shopinfo.cGoods
  }
}

export const getRecommend = () => {
  return request({
    url: 'recommend'
  })
}