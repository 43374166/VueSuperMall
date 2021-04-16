<template>
  <div class="login">
    <nav-bar class="login-slot">
      <div slot="left"
           class="back-img"
           @click="backClick"><img src="~assets/img/common/back-white.svg" alt=""></div>
      <div slot="center">登录</div>
    </nav-bar>
    <div class="login-info">
      <form action="login.php" method="post" class="from-info">
        <input type="text" name="username" placeholder="用户名/手机号/邮箱">
        <span>{{userHint.hint}}</span>
        <input type="password" name="password" placeholder="密码">
        <span>{{pswHint.hint}}</span>
        <input type="submit" name="submit" value="登录">
      </form>
      <div class="forget-psw">
        <span>忘记密码</span> <span>/</span> <span>没有账号？立即注册</span>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  data() {
    return {
      userHint: {hint: ''},
      pswHint: {}
    }
  },
  components: {
    NavBar
  },
  methods: {
    backClick() {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
  .login-slot {
    background-color: var(--color-tint);
    color: #fff;
  }

  .login-info {
    margin: 40% auto;
    width: 94%;
    height: 200px;
    border-radius: 2%;
    /* background-color: rgba(179, 179, 179, 0.349); */
    border: 1px solid rgb(160, 160, 160);

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-shadow: 3px 3px 5px 0px rgb(187, 187, 187);
  }

  .from-info {
    width: 90%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .from-info input {
    height: 35px;
    border: none;
    border-bottom: 1.5px solid rgb(134, 134, 134);
    margin: 5px 0;
    outline: none;
  }

  .from-info input[name="submit"] {
    background-color: rgba(255, 81, 0, 0.7);
    border-radius: 5px;
    border: none;
    color: #fff;
  }



  .back-img {
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: center;
  }

  .back-img img{
    width: 40%;
  }
</style>