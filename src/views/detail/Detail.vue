<template>
  <div id="detail">
    <detail-nav-bar class="detail-navbar"/>
    <scroll :probe-type="3"
            class="content">
      <detail-swiper :swiper-img="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-image :detail-info="detailInfo" />
      <detail-params :item-params="itemParams" />
      <detail-conment :conment-info="conmentInfo" />
      <goods-list :goods="recommends"/>
    </scroll>
  </div>
</template>

<script>
import {getDetail, Goods, Shop, getRecommend} from 'network/detail'
import DetailNavBar from './Childcomps/DetailNavBar'
import DetailSwiper from './Childcomps/DetailSwiper'
import DetailBaseInfo from './Childcomps/DetailBaseInfo'
import Scroll from 'components/common/scroll/Scroll.vue'
import DetailShopInfo from './Childcomps/DetailShopInfo'
import DetailImage from './Childcomps/DetailImage'
import DetailParams from './Childcomps/DetailParams'
import DetailConment from './Childcomps/DetailConment'

import GoodsList from 'components/content/goods/GoodsList'

export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      itemParams: {},
      conmentInfo: {},
      recommends: []
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    Scroll,
    DetailShopInfo,
    DetailImage,
    DetailParams,
    DetailConment,
    GoodsList
  },
  created() {
    // 拿到iid 
    this.iid = this.$route.params.iid
    // 获取数据
    this.getDetail()
    this.getRecommend()
  },
  methods: {
    getDetail() {
      getDetail(this.iid).then(res => {
        // console.log(res.result);

        const data = res.result
        this.topImages = data.itemInfo.topImages
        // 获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 获取店铺信息
        this.shop = new Shop(data.shopInfo)
        // console.log(this.goods);

        // 保存商品的详情信息
        this.detailInfo = data.detailInfo
        // console.log(this.detailInfo);

        // 保存商品的尺码参数等
        this.itemParams = data.itemParams
        
        // 保存评论信息数据
        this.conmentInfo = data.rate
        // console.log(this.conmentInfo);
      })
    },
    getRecommend() {
      getRecommend().then(res => {
        console.log(res);

        this.recommends = res.data.list

        console.log(this.recommends);
      })
    }
  }
}
</script>

<style scoped>
  #detail {
    height: 100vh;
    position: relative;
    z-index: 10;
    background-color: #fff;
  }
  .detail-navbar {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content {
    height: calc(100% - 44px);
  }
</style>