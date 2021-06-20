<template>
  <div id="detail">
    <detail-nav-bar class="detail-navbar" @titleClick="titleClick" />
    <scroll :probe-type="3" ref="scroll" class="content">
      <detail-swiper :swiper-img="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-image :detail-info="detailInfo" @detailImgLoad="detailImgLoadFinish"/>
      <detail-params ref="params" :item-params="itemParams" />
      <detail-conment ref="comment" :conment-info="conmentInfo" />
      <goods-list ref="recommend" :goods="recommends" />
    </scroll>
  </div>
</template>

<script>
import { getDetail, Goods, Shop, getRecommend } from "network/detail";
import {debounce} from 'common/utils'
import { itemListenerMixin } from "common/mixin";

import DetailNavBar from "./Childcomps/DetailNavBar";
import DetailSwiper from "./Childcomps/DetailSwiper";
import DetailBaseInfo from "./Childcomps/DetailBaseInfo";
import Scroll from "components/common/scroll/Scroll.vue";
import DetailShopInfo from "./Childcomps/DetailShopInfo";
import DetailImage from "./Childcomps/DetailImage";
import DetailParams from "./Childcomps/DetailParams";
import DetailConment from "./Childcomps/DetailConment";
import GoodsList from "components/content/goods/GoodsList";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      itemParams: {},
      conmentInfo: {},
      recommends: [],
      saveY: null,
      themeTopYs: [],
      getThemeTopYs: null,
    };
  },
  mixins: [itemListenerMixin],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    Scroll,
    DetailShopInfo,
    DetailImage,
    DetailParams,
    DetailConment,
    GoodsList,
  },
  created() {
    // 拿到iid
    this.iid = this.$route.params.iid;
    // 获取数据
    this.getDetail();
    this.getRecommend();

    // 给getThemeTopYs赋值
    this.getThemeTopYs = debounce(() => {
      this.themeTopYs = [];

      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);

      // console.log(this.themeTopYs);
    }, 100);
  },
  mounted() {
    // 代码已经写到了混入里面
    // let newRefresh = debounce(this.$refs.scroll && this.$refs.scroll.refresh, 200)

    // this.itemImgListener = () => {
    //   newRefresh()
    // }

    // this.$bus.$on('detailImageLoad', this.itemImgListener)
    // this.saveY = this.$refs.scroll && this.$refs.scroll.getScrollY();
    // console.log(this.saveY);
  },
  destroyed() {
    this.$bus.$off('itemImgLoad', this.itemImgListener)
    // console.log('离开了');
  },
  methods: {
    getDetail() {
      getDetail(this.iid).then((res) => {
        // console.log(res.result);

        const data = res.result;
        this.topImages = data.itemInfo.topImages;
        // 获取商品信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );

        // 获取店铺信息
        this.shop = new Shop(data.shopInfo);
        // console.log(this.goods);

        // 保存商品的详情信息
        this.detailInfo = data.detailInfo;
        // console.log(this.detailInfo);

        // 保存商品的尺码参数等
        this.itemParams = data.itemParams;

        // 保存评论信息数据
        this.conmentInfo = data.rate;
        // console.log(this.conmentInfo);
      });
    },
    getRecommend() {
      getRecommend().then((res) => {
        // console.log(res);

        this.recommends = res.data.list;

        // console.log(this.recommends);
      });
    },
    detailImgLoadFinish() {
      // console.log('......');
      this.newRefresh();

      this.getThemeTopYs()
    },
    titleClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index] + 44, 200); // 参数分别为x, y, time时间
    },
  },
};
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