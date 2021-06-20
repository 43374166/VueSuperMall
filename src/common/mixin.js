import {debounce} from './utils'

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll && this.$refs.scroll.refresh, 200)

    this.itemImgListener = () => {
      newRefresh()
    }
    
    this.$bus.$on('itemImgLoad', this.itemImgListener)
    // console.log('我是混入的内容');
  }
}