<template>
  <div class="isLogin">
    <div class="info info-login" v-if="isLogin">

    </div>
    <div class="info info-login-out" v-else>
      <div class="head-img">
        <img src="~assets/img/images/default-hand.jpg" alt="">
      </div>
      <div class="login-text">
        <span @click="goLogin">登录</span><span>/</span><span>注册</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false
    }
  },
  methods: {
    goLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  .info {
    width: 96%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px auto;
    align-items: center;

    background-color: rgba(184, 184, 184, 0.363);

    border-radius: 5px;
    box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.151);
  }

  .head-img {
    width: 66px;
    height: 66px;
    border-radius: 50%;
    overflow: hidden;
  }

   .head-img img {
    width: 100%;
  }

  .info-login-out  .login-text{
    margin-top: 10px;
  }

  .login-text {
    display: flex;
    
  }

  .login-text span {
    display: block;
    margin: 0 2px 0 2px;
  }
</style>