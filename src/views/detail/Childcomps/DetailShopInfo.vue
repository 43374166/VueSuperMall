<template>
  <div class="shop-info">
    <div class="logo">
      <img :src="shop.logo" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>

</style>