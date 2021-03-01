<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll :probe-type="3">
      <detail-swiper :swiper-img="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
    </scroll>  
  </div>
</template>

<script>
import {getDetail, Goods, Shop} from 'network/detail'
import DetailNavBar from './Childcomps/DetailNavBar'
import DetailSwiper from './Childcomps/DetailSwiper'
import DetailBaseInfo from './Childcomps/DetailBaseInfo'
import Scroll from 'components/common/scroll/Scroll.vue'

export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {}
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    Scroll
  },
  created() {
    // 拿到iid 
    this.iid = this.$route.params.iid
    // 获取数据
    this.getDetail()
  },
  methods: {
    getDetail() {
      getDetail(this.iid).then(res => {
        console.log(res);

        const data = res.result
        this.topImages = data.itemInfo.topImages

        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        this.shop = new Shop(data.shopInfo)
        // console.log(this.goods);
      })
    }
  }
}
</script>

<style>

</style>